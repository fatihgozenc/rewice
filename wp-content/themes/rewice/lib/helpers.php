<?php

function dev($func, $width, $height){?>
	<pre style="width: <?= $width ?>%; height: <?= $height ?>%;" class="dev">
		<?php var_dump($func);?>
	</pre>
<?php };

function ifLangDe($value_de, $value_en){
	return pll_current_language() === 'de' ? $value_de : $value_en;
};

function createSlug($str, $delimiter = '-'){

	$slug = strtolower(trim(preg_replace('/[\s-]+/', $delimiter, preg_replace('/[^A-Za-z0-9-]+/', $delimiter, preg_replace('/[&]/', 'and', preg_replace('/[\']/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $str))))), $delimiter));
	return $slug;
}



?>