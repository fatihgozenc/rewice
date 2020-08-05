<?php 
$contact = get_field('kontaktinfo', 'option');
$logo = get_field('logo', 'option');

function Navigation($menuLinks, $primaryLangUrl, $secondaryLangUrl, $tel, $email, $request){ 
		global $HOME;?>
	<header attr="<?= $tel ?>" class="menu">
		<a href="/" id="logo"><img class="menu__logo" src="<?= $HOME ?>/dist/images/logo-light.svg" alt="Rewice Logo"></a>
		<a id="toggler" href="javascript:void(0);" class="nav__toggler">
			<?php Icons('toggler');?>
		</a>
		<nav class="nav">
			<ul class="nav__list ">
				<?php foreach($menuLinks as $item): ?>
					<li class="nav__list--item <?= $request == parse_url( $item['url'])['path'] ? 'menu-item-active' : null ?>">
						<a class="<?= $item['url']?>" href="<?= $item['url'] ?>"><?= $item['title'] ?></a>
					</li>
				<?php endforeach; ?>
			</ul>
			<div class="nav__kontakt">
				<a class="nav__kontakt--item nav__kontakt__tel" href="tel:<?= $tel ?>">
					<div class="nav__kontakt--icon nav__kontakt__tel--icon">
						<?php Icons('tel');?>
					</div>
					<span><?= $tel ?></span>
				</a>
				<a class="nav__kontakt--item nav__kontakt__mail" href="mailto:<?= $email ?>" >
					<div class="nav__kontakt--icon nav__kontakt__mail--icon">
						<?php Icons('mail');?>
					</div>
					<span><?= $email ?></span>
				</a>
			</div>
			<div class="nav__lang">
				<a class="nav__lang--item <?= ifLangDe('item-active', null) ?>" href="<?= $primaryLangUrl ?>">DE</a>
				<span>&nbsp;|&nbsp;</span>
				<a class="nav__lang--item <?= ifLangDe(null, 'item-active') ?>" href="<?= $secondaryLangUrl ?>">EN</a>
			</div>
		</nav>
	</header>
<?php ;}; ?>
