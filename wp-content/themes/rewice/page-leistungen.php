<?php /* Template Name: Leistungen */ 
  get_header();
  $content_acf = get_fields();
  $theme_color = $content_acf['theme_color'];
  $isLight = $theme_color == 'light' ? true : false;
	$erster_block = $content_acf['erster_block'];
  $zweiter_block = $content_acf['zweiter_block'];
  $hero = get_the_post_thumbnail_url();
?>

<section class="hero leistungen lazyLoad <?= $theme_color ?> bgImg" data-bg=<?= $hero ?>>
  <?php if($isLight):?>
    <div class="hero__image lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__seven--light.png"?>"></div>
  <?php endif; ?>
  <div class="hero__content hero__content--main leistungen">
    <?= $erster_block ?>
    <?= $zweiter_block['erster_inhalt'] ?>
  </div>
</section>

<main id="content" class="content__leistungen">
<?= $zweiter_block['zweiter_inhalt'] ?>
  <section class="cards <?= $theme_color ?> leistungen">
    <?php foreach($zweiter_block['leistungen_block'] as $item): ?>
      <div class="cards__item">
        <img src="<?= $item['icon'] ?>" alt="<?= $item['info']['titel'] ?>">
        <h4 class="cards__item--title"><?= $item['info']['titel'] ?></h4>
        <div class="cards__item--content"><?= $item['info']['inhalt'] ?></div>
        <button class="cards__item--button" title="<?= $item['info']['titel'] ?> Toggle">v</button>
      </div>
    <?php endforeach; ?>
  </section>
</main>

<?php get_footer();?>
