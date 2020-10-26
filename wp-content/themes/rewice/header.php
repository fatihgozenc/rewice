<?php
	global $HOME;
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
	$contact = get_field('kontaktinfo', 'option');
	$header_menu = get_navigation('header-menu');
?><!DOCTYPE html>
<html <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title><?php #ifLangDe($metaTags['de']['titel'], $metaTags['en']['titel']) ?></title>
		<meta name="description" content="<?php #ifLangDe($metaTags['de']['beschreibung'], $metaTags['en']['beschreibung']) ?>">
		<meta name="keywords" content=" <?php #ifLangDe($metaTags['de']['schlusselworter'], $metaTags['en']['schlusselworter']) ?>">
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
	<body data-fade-in="true" >
	<div id="page">
		<?php Navigation(
			$header_menu, 
			$langDE['url'], 
			$langEN['url'], 
			$contact['telefon'], 
			$contact['e-mail'], 
			$_SERVER['REQUEST_URI']
		); ?>