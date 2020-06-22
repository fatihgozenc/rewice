<?php get_header();?>
<?php include('components/navigation.php') ?>

<section class="hero lazyLoad bgImg" data-bg=<?= $HOME . "/dist/images/hero__image--light.jpg"?>>
	<div class="hero__image lazyLoad bgImg" data-bg="<?= $HOME . "/dist/images/hero__seven--light.png"?>"></div>
	<div class="hero__content hero__content--main">
		<h2><strong>Gemeinsam</strong>Berge überwinden</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
		<a href="#" class="rewice__button">Über asdasNaber Uns</a>
	</div>
</section>

<?php
	$iconsContent = [
		[
			"titel" => "Methodik",
			"inhalt" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
			"icon" => $HOME . "/dist/images/icon-methodik.svg"
		],
		[
			"titel" => "Stakeholderanalyse",
			"inhalt" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
			"icon" => $HOME . "/dist/images/icon-stakeholderanalyse.svg"
		],
		[
			"titel" => "Lösungstool",
			"inhalt" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
			"icon" => $HOME . "/dist/images/icon-losungstool.svg"
		],
		[
			"titel" => "Prozess -und Datenanalysen",
			"inhalt" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
			"icon" => $HOME . "/dist/images/icon-datenanalysen.svg"
		],
		[
			"titel" => "Schnittstellenberatung",
			"inhalt" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
			"icon" => $HOME . "/dist/images/icon-methodik.svg"
		],
		[
			"titel" => "Qualitätssicherer",
			"inhalt" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
			"icon" => $HOME . "/dist/images/icon-qualitatssicherer.svg"
		]
	];
	$peopleContent = [
		[
			"titel" => "Max Mustermann",
			"inhalt" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
			"icon" => $HOME . "/dist/images/people-1.png"
		],
		[
			"titel" => "Max Mustermann",
			"inhalt" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
			"icon" => $HOME . "/dist/images/people-2.png"
		],
		[
			"titel" => "Erika Mustermann",
			"inhalt" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
			"icon" => $HOME . "/dist/images/people-3.png"
		]
	];
	$aboutusContent = [
		"titel" => "Das Sind Wir",
		"inhalt" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \r\n\r\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ",
		"button" => ['titel' => 'Kontakt', 'link' => '/kontakt']
	];
?>
<main>
	<div class="hero__content hero__content--right">
		<h2><strong>Dienstleistungen</strong>Auf einen Blick</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
		<a href="#" class="rewice__button">Mehr erfahren</a>
	</div>
	<div class="preface">
		<section class="parallax">
			<div class="parallax__wrapper">
			<img data-depth="0.4" src=<?= $HOME . "/dist/images/figure.jpg"?> alt="Parallax Figure">
			<div  data-depth="0.3" class="parallax__circle">
				<div class="parallax__circle--item"></div>
				<div class="parallax__circle--item"></div>
			</div>
			</div>
		</section>
		<section class="cards">
			<?php foreach($iconsContent as $item): ?>
				<div class="cards__item">
					<img src="<?= $item['icon'] ?>" alt="<?= $item['titel'] ?>">
					<h3 class="cards__item--title"><?= $item['titel'] ?></h3>
					<div class="cards__item--content"><?= $item['inhalt'] ?></div>
				</div>
			<?php endforeach; ?>
		</section>
		<section class="people">
			<?php foreach($peopleContent as $item): ?>
				<div class="people__item">
					<img src="<?= $item['icon'] ?>" alt="<?= $item['titel'] ?>">
					<div class="people__item--content">
						<h3 class="title__iii people__item--title"><?= $item['titel'] ?></h3>
						<div><?= $item['inhalt'] ?></div>
					</div>
				</div>
			<?php endforeach; ?>
		</section>
		<section class="aboutus">
			<h3 class="title__iii"><?= $aboutusContent['titel'] ?></h3>
			<div class="aboutus--content"><?= $aboutusContent['inhalt'] ?></div>
			<a href="<?= $aboutusContent['button']['link'] ?>" class="rewice__button"><?= $aboutusContent['button']['titel'] ?></a>
		</section>
	</div>
</main>
<?php get_footer();?>
