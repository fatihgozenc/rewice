<?php
	get_header();
	$theme_color = $content_acf['theme_color'];
  $isLight = $theme_color == 'light' ? true : false;
  $title = get_the_title();
  $content = get_the_content();
?>

<h1 class="title__seo"><?= $title ?></h1>

<?php if($isLight):?>
	<section class="hero lazyLoad bgImg" data-bg=<?= get_the_post_thumbnail_url();?>>
		<div class="hero__image lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__seven--light.png"?>"></div>
		<div class="hero__content hero__content--main">
			<?= $content ?>
		</div>
	</section>
<?php else: ?>
	<section class="hero hero__dark lazyLoad" data-bg="<?= $HOME . "/dist/images/hero__image--dark-bg.jpg"?>">
		<div data-depth="0.1" data-friction-y="0.8" class="hero__dark__layer hero__dark__layer--one lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__image-dark-1.png"?>"></div>
		<div data-depth="0.3" data-friction-y="0.8" class="hero__dark__layer hero__dark__layer--two lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__image-dark-2.png"?>"></div>
		<div data-depth="0.5" data-friction-y="0.7" class="hero__dark__layer hero__dark__layer--three lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__image-dark-3.png"?>"></div>
	</section>
	<div class="hero__content dark hero__content--main"><?= $content ?></div>
<?php endif; ?>

<?php get_footer();?>
