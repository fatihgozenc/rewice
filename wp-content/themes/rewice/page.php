<?php
	get_header();
	$content_acf = get_fields();
	$title = get_the_title();
	$hero = get_the_post_thumbnail_url();
?>

<h1 class="title__seo"><?= $title ?></h1>

<section class="hero hero--singlepage lazyLoad bgImg" data-bg=<?= $hero ?>>
	<div class="hero__image hero__image--singlepage lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__seven--light.png"?>"></div>
	<div class="hero__content hero__content--main hero__content--single">
		<?php the_content(); ?>
	</div>
</section>

<?php get_footer();?>

