<?php
	$logoWhite = get_field('logo_weiss', 'options');
	$logoColor = get_field('logo_farbe', 'options');
	$kontaktMail = get_field('kontaktmail', 'options');
	$metaTags = get_field('meta_tags', 'options');
	$telefon = get_field('telefon', 'options');
	$facebook = get_field('facebook', 'options');
	$langs = pll_the_languages(['raw' => '1']);
	$activeLang = pll_current_language();;
	$langEN = $langs['en'];
	$langDE = $langs['de'];
	$header_menu = get_navigation('header-menu');
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title><?php #ifLangDe($metaTags['de']['titel'], $metaTags['en']['titel']) ?></title>
		<meta name="description" content="<?php #ifLangDe($metaTags['de']['beschreibung'], $metaTags['en']['beschreibung']) ?>">
		<meta name="keywords" content=" <?php #ifLangDe($metaTags['de']['schlusselworter'], $metaTags['en']['schlusselworter']) ?>">
		<link rel="apple-touch-icon" sizes="57x57" href="<?=$HOME ?>/dist/favicon/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="<?=$HOME ?>/dist/favicon/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="<?=$HOME ?>/dist/favicon/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="<?=$HOME ?>/dist/favicon/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="<?=$HOME ?>/dist/favicon/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="<?=$HOME ?>/dist/favicon/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="<?=$HOME ?>/dist/favicon/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="<?=$HOME ?>/dist/favicon/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="<?=$HOME ?>/dist/favicon/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192" href="<?=$HOME ?>/dist/favicon/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="<?=$HOME ?>/dist/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="<?=$HOME ?>/dist/favicon/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?=$HOME ?>/dist/favicon/favicon-16x16.png">
		<link rel="manifest" href="<?=$HOME ?>/dist/favicon/manifest.json">
		<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
		<meta name="theme-color" content="#ffffff">
		<script>
			// function loadGAonConsent() {
			// 	window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;
			// 	ga('create', 'UA-101003475-3', 'auto');
			// 	ga('set', 'anonymizeIp', true);
			// 	ga('send', 'pageview');
			// 	var gascript = document.createElement("script");
			// 	gascript.async = true;
			// 	gascript.src = "https://www.google-analytics.com/analytics.js";
			// 	document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]);
			// }
			// if (document.cookie.split(';').filter(function (item) {
			// 	return item.indexOf('cookieconsent_status=allow') >= 0
			// }).length) {
			// 	loadGAonConsent();
			// }
		</script>
		<script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.2.0/dist/simpleParallax.min.js"></script>

		<?php wp_head(); ?>
	</head>
	<body data-fade-in="true" class="<?= ifLangDe('light', 'dark'); ?>" >
		<?php Navigation($header_menu, $langDE['url'], $langEN['url']); ?>
		<?php #$urls = explode('/', $_SERVER['REQUEST_URI']); $addEnUrl = $urls[1] == 'en' ? 'en/' : null; ?>