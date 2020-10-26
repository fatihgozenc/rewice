import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import del from 'del';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import named from 'vinyl-named';
import browserSync from 'browser-sync';

const server = browserSync.create();
const PRODUCTION = yargs.argv.prod;

const paths = {
	styles: {
		src: 'src/scss/bundle.scss',
		dest: 'dist/css'
	},
	images: {
		src: 'src/images/**/*.{jpg,jpeg,png,svg,gif}',
		dest: 'dist/images'
	},
	scripts: {
		src: ['src/js/bundle.js', 'src/js/loader.js'],
		dest: 'dist/js'
	},
	other: {
		src: [
			'src/**/*',
			'!src/{images,js,scss}',
			'!src/{images,js,scss}/**/*'
		],
		dest: 'dist'
	},
	package: {
		src: [
			'**/*',
			'!node_modules{,/**}',
			'!packaged{,/**}',
			'!src{,/**}',
			'!.babelrc',
			'!.gitignore',
			'!gulpfile.babel.js',
			'!package-lock.json',
			'!package.json'
		],
		dest: 'packaged'
	}
}

export const serve = (done) => {
	server.init({
		proxy: "https://rewice.test"
	});
	done();
}

export const reload = (done) => {
	server.reload();
	done();
}

export const clean = () => del(['dist'])

export const styles = () => {
	return gulp.src(paths.styles.src)
		.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulpif(PRODUCTION, cleanCSS({ compatibility: 'ie8' })))
		.pipe(gulpif(!PRODUCTION, sourcemaps.write()))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(server.stream());
}

export const images = () => {
	return gulp.src(paths.images.src)
		.pipe(gulpif(PRODUCTION, imagemin()))
		.pipe(gulp.dest(paths.images.dest))
}

export const copy = () => {
	return gulp.src(paths.other.src)
		.pipe(gulp.dest(paths.other.dest))
}

export const watch = () => {
	gulp.watch('src/scss/**/*.scss', styles);
	gulp.watch('src/js/**/*.js', gulp.series(scripts, reload));
	gulp.watch('**/*.php', reload);
	gulp.watch(paths.images.src, gulp.series(images, reload));
	gulp.watch(paths.other.src, gulp.series(copy, reload));
}

export const scripts = () => {
	return gulp.src(paths.scripts.src)
		.pipe(named())
		.pipe(webpack({
			mode: !PRODUCTION ? 'development' : 'production',
			module: {
				rules: [
					{
						test: /\.js$/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env']
							}
						}
					}
				]
			},
			output: {
				filename: '[name].js'
			},
			externals: {
				jquery: 'jQuery'
			},
			devtool: !PRODUCTION ? 'inline-source-map' : false
		}))
		.pipe(gulpif(PRODUCTION, uglify()))
		.pipe(gulp.dest(paths.scripts.dest));
}

export const dev = gulp.series(clean, gulp.parallel(styles, scripts, images, copy), serve, watch);
export const build = gulp.series(clean, gulp.parallel(styles, scripts, images, copy));

export default dev;