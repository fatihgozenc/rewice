<?php 
$footer_menu = get_navigation('footer-menu');
$contact = get_field('kontaktinfo', 'option');
?>
	<footer class="footer">
		<div class="footer__block">
		<?php foreach($contact['address'] as $i => $item): ?>
			<p class="footer__block__addressline"><?= $item ?></p>
		<?php endforeach; ?>
		</div>
		<div class="footer__block">
			<div class="footer__block__routers">
				<?php foreach($footer_menu as $i => $item): ?>
					<a href="<?= $item['url'] ?>"><?= $item['title']; ?> <?= $i === array_key_last($footer_menu) ? null : ' | '; ?></a>
				<?php endforeach; ?>
			</div>
			<div class="footer__block__contact">
				<a class="nav__kontakt--item nav__kontakt__tel" href="tel:<?= $contact['telefon'] ?>">
					<div class="nav__kontakt--icon nav__kontakt__tel--icon">
						<?php Icons('tel');?>
					</div>
					<span><?= $contact['telefon'] ?></span>
				</a>
				<a class="nav__kontakt--item nav__kontakt__mail" href="mailto:<?= $contact['e-mail'] ?>" >
					<div class="nav__kontakt--icon nav__kontakt__mail--icon">
						<?php Icons('mail');?>
					</div>
					<span><?= $contact['e-mail'] ?></span>
				</a>
			</div>
		</div>
	</footer>
	</div>
		<?php wp_footer(); ?>
		<script type="text/javascript">
			(function (d, t) {
				var pp = d.createElement(t), s = d.getElementsByTagName(t)[0];
				pp.src = '//app.pageproofer.com/embed/0dd33360-7909-5eef-b374-f6a79979d207';
				pp.type = 'text/javascript';
				pp.async = true;
				s.parentNode.insertBefore(pp, s);
			})(document, 'script');
			</script>
	</body>
</html>