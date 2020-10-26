<?php /* Template Name: Home */ ?>
  
<?php
	get_header();
	$content_acf = get_fields();
	$erster_block = $content_acf['erster_block'];
	$zentrierter_block = $content_acf['zentrierter_block'];
	$zweiter_block = $content_acf['zweiter_block'];
	$angestellte_block = $content_acf['angestellte_block'];
	$aboutus_block = $content_acf['aboutus_block'];
	$quotes = $aboutus_block['zitate'];
?>

<h1 class="title__seo"><?= get_the_title(); ?></h1>

<?= ifLangDe('<section class="hero hero-de lazyLoad bgImg" data-bg=' . get_the_post_thumbnail_url() . '><div class="hero__image lazyLoad bgImg" data-bg="' . $HOME . '/dist/images/hero__seven--light.png"></div><div class="hero__content hero__content--main hero__content--de">' . $erster_block['inhalt'] . '<a href="' . $erster_block['button']['url'] . '" class="rewice__button">' . $erster_block['button']['title'] . '</a></div><div class="hero__content hero__content--centered">' . $zentrierter_block['inhalt'] . '<a href="' . $zentrierter_block['button']['url'] . '" class="rewice__button">' . $zentrierter_block['button']['title'] . '</a></div></section>', '<section class="hero"><div class="parallax__wrapper--mountains"><img class="parallax__wrapper--mountain parallax__wrapper--mountain-back" data-depth-y="0.2" src="' . $HOME . '/dist/images/hero__mountains-layer1.jpg" alt="Mountain Background"><img class="parallax__wrapper--mountain parallax__wrapper--mountain-front" data-depth-y="0.35" src="' . $HOME . '/dist/images/hero__mountains-layer2.png" alt="Mountain Front Layer"><div class="hero__content hero__content--main hero__content--main-en">' . $erster_block['inhalt'] . '<a href="' . $erster_block['button']['url'] . '" class="rewice__button">' . $erster_block['button']['title'] . '</a></div>	<div class="hero__content hero__content--centered hero__content--centered-en">' . $zentrierter_block['inhalt'] . '<a href="' . $zentrierter_block['button']['url'] . '" class="rewice__button">' . $zentrierter_block['button']['title'] . '</a></div></div></section>');?>

<main id="content" class="maincontent__<?= ifLangDe('de', 'en') ?>">
	<div class="hero__content hero__content--right">
		<?= $zweiter_block['inhalt'] ?>
		<a href="<?= $zweiter_block['button']['url'] ?>" class="rewice__button"><?= $zweiter_block['button']['title'] ?></a>
	</div>
	<div class="preface">
		<section class="parallax">
			<?php // echo ifLangDe(
			//	'<div class="parallax__wrapper">
			//		<img data-depth="0.4" src="' . $HOME . '/dist/images/figure.jpg" alt="Parallax Figure">
			//		<div data-depth="0.3" class="parallax__circle">
			//			<div class="parallax__circle--item"></div>
			//			<div class="parallax__circle--item"></div>
			//		</div>
			//	</div>'
			//, null) ?>
			<?= (
				'<div class="parallax__wrapper">
					<img data-depth="0.4" src="' . $HOME . '/dist/images/figure.jpg" alt="Parallax Figure">
					<div data-depth="0.3" class="parallax__circle">
						<div class="parallax__circle--item"></div>
						<div class="parallax__circle--item"></div>
					</div>
				</div>'
			) ?>
		</section>
		<section class="cards">
			<?php foreach($zweiter_block['icons'] as $item): ?>
				<a href="<?= ifLangDe('/leistungen', '/services') ?>" class="cards__item">
					<img class="cards__item--icon" src="<?= $item['icon'] ?>" alt="<?= $item['info']['titel'] ?>">
					<h3 class="cards__item--title"><?= $item['info']['titel'] ?></h3>
					<div class="cards__item--content"><?= $item['info']['inhalt'] ?></div>
					<button class="rewice__button"><?= ifLangDe('Mehr Lesen', 'Read More'); ?></button>
				</a>
			<?php endforeach; ?>
		</section>
		<section class="people">
			<?php foreach($angestellte_block as $item): ?>
				<div class="people__item">
					<img src="<?= $item['bild'] ?>" alt="<?= $item['info']['titel'] ?>">
					<div class="people__item--content">
						<h3 class="title__iii people__item--title"><?= $item['info']['titel'] ?></h3>
						<div><?= $item['info']['inhalt'] ?></div>
					</div>
				</div>
			<?php endforeach; ?>
		</section>
		<section class="aboutus">
			<div class="aboutus--content"><?= $aboutus_block['inhalt'] ?></div>
			<a href="<?= $aboutus_block['button']['url'] ?>" class="rewice__button"><?= $aboutus_block['button']['title'] ?></a>
			<?php QuoteSlider($quotes); ?>
		</section>
	</div>
</main>
<?php get_footer();?>
