<?php function QuoteSlider($quotes){ ?>
	<div class="aboutus__quote--wrapper">
		<?php foreach($quotes as $i => $quote): ?>
			<div class="aboutus__quote">
				<div class="aboutus__quote--content"><?= $quote['zitat']; ?></div>
				<div class="aboutus__quote--person"><?= $quote['person']; ?></div>
			</div>
		<?php endforeach; ?>
	</div>
<?php ;}; ?>