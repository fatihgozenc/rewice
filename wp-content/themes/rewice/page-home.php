<?php /* Template Name: Home */ ?>
  
<?php
	get_header();
	$content_acf = get_fields();
	$theme_color = $content_acf['theme_color'];
	$isLight = $theme_color == 'light' ? true : false;
	$erster_block = $content_acf['erster_block'];
	$zentrierter_block = $content_acf['zentrierter_block'];
	$zweiter_block = $content_acf['zweiter_block'];
	$angestellte_block = $content_acf['angestellte_block'];
	$aboutus_block = $content_acf['aboutus_block'];
	$quotes = $aboutus_block['zitate'];
?>

<h1 class="title__seo"><?= get_the_title(); ?></h1>

<?php if($isLight):?>
	<section class="hero lazyLoad bgImg" data-bg=<?= get_the_post_thumbnail_url();?>>
		<div class="hero__image lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__seven--light.png"?>"></div>
		<div class="hero__content hero__content--main">
			<?= $erster_block['inhalt'] ?>
			<a href="<?= $erster_block['button']['url'] ?>" class="rewice__button"><?= $erster_block['button']['title'] ?></a>
		</div>
		<div class="hero__content hero__content--centered">
			<?= $zentrierter_block['inhalt'] ?>
			<a href="<?= $zentrierter_block['button']['url'] ?>" class="rewice__button"><?= $zentrierter_block['button']['title'] ?></a>
		</div>
	</section>
<?php else: ?>
	<section class="hero hero__dark lazyLoad" data-bg="<?= $HOME . "/dist/images/hero__image--dark-bg.jpg"?>">
		<div data-depth="0.1" data-friction-y="0.8" class="hero__dark__layer hero__dark__layer--one lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__image-dark-1.png"?>"></div>
		<div data-depth="0.3" data-friction-y="0.8" class="hero__dark__layer hero__dark__layer--two lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__image-dark-2.png"?>"></div>
		<div data-depth="0.5" data-friction-y="0.7" class="hero__dark__layer hero__dark__layer--three lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__image-dark-3.png"?>"></div>
	</section>
	<div class="hero__content dark hero__content--main">
		<?= $erster_block['inhalt'] ?>
		<a href="<?= $erster_block['button']['url'] ?>" class="rewice__button"><?= $erster_block['button']['title'] ?></a>
	</div>
	<a href="#content" title="scroller" class="hero__content--scroller"><?= ifLangDe('Scrollen', 'Scroll') ?></a>
<?php endif; ?>

<main id="content">
	<div class="hero__content hero__content--right">
		<?= $zweiter_block['inhalt'] ?>
		<a href="<?= $zweiter_block['button']['url'] ?>" class="rewice__button"><?= $zweiter_block['button']['title'] ?></a>
	</div>
	<div class="preface <?= $theme_color ?>">
		<section class="parallax <?= $theme_color ?>">
			<div class="parallax__wrapper">
			<img data-depth="0.4" src=<?= $HOME . "/dist/images/figure.jpg"?> alt="Parallax Figure">
			<div data-depth="0.3" class="parallax__circle">
				<div class="parallax__circle--item"></div>
				<div class="parallax__circle--item"></div>
			</div>
			</div>
		</section>
		<section class="cards <?= $theme_color ?>">
			<?php foreach($zweiter_block['icons'] as $item): ?>
				<a href="/leistungen" class="cards__item">
					<img class="cards__item--icon" src="<?= $item['icon'] ?>" alt="<?= $item['info']['titel'] ?>">
					<h3 class="cards__item--title"><?= $item['info']['titel'] ?></h3>
					<div class="cards__item--content"><?= $item['info']['inhalt'] ?></div>
					<button class="rewice__button--action"><img height="32" src="<?= $HOME . "/dist/images/action.svg"?>" alt="Action Icon"></button>
				</a>
			<?php endforeach; ?>
		</section>
		<section class="people <?= $theme_color ?>">
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
		<section class="aboutus <?= $theme_color ?>">
			<div class="aboutus--content"><?= $aboutus_block['inhalt'] ?></div>
			<a href="<?= $aboutus_block['button']['url'] ?>" class="rewice__button"><?= $aboutus_block['button']['title'] ?></a>
			<?php QuoteSlider($quotes); ?>
		</section>
	</div>
</main>
<?php get_footer();?>
