<?php /* Template Name: Kontakt */
  get_header();
  $content_acf = get_fields();
  $theme_color = $content_acf['theme_color'];
  $isLight = $theme_color == 'light' ? true : false;
  $erster_block = $content_acf['erster_block'];
  $quotes = $content_acf['zitate'];
  $angestellte_block = $content_acf['angestellte_block'];
  $hero = get_the_post_thumbnail_url();
?>

<section class="hero kontakt lazyLoad <?= $theme_color ?> bgImg" data-bg=<?= $hero ?>>
  <?php if($isLight):?>
    <div class="hero__image lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__seven--light.png"?>"></div>
  <?php endif; ?>
  <div class="hero__content hero__content--main leistungen">
    <?= $erster_block ?>
  </div>
  <main id="content" class="content__kontakt <?= $theme_color ?>">
  <?php foreach($angestellte_block as $item):?>
    <div class="content__kontakt--item">
      <?php $name = explode(" ", $item['name']);?>
      <h3><?= $name[0] ?> <strong><?= $name[1] ?></strong></h3>
      <h4><?= $item['jobtitel'] ?></h4>
      <div class="content__kontakt--item-icon">
        <?php Icons('tel') ?><a href="tel:<?= $item['tel'] ?>"><?= $item['tel'] ?></a>
      </div>
      <div class="content__kontakt--item-icon">
        <?php Icons('mail') ?><a href="mailto:<?= $item['mail'] ?>"><?= $item['mail'] ?></a>
      </div>
      <div class="content__kontakt--item-icon">
      <?php Icons('address'); ?><p><?= $item['address'] ?></p>
      </div>
		</div>
		
	<?php endforeach; ?>
	<section class="aboutus kontakt">
		<?php foreach($quotes as $quote):?>
			<div class="aboutus__quote">
				<div class="aboutus__quote--content"><?= $quote['zitat']; ?></div>
				<div class="aboutus__quote--person"><?= $quote['person']; ?></div>
			</div>
		<?php endforeach; ?>
	</section>
</main>
</section>



<?php get_footer(); ?>