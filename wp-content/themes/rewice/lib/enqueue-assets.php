<?php

function rewice_assets(){
	wp_enqueue_style('rewice-stylesheet', 
		get_template_directory_uri() . '/dist/css/bundle.css', 
		[], '1.0.0', 'all');
	
	wp_enqueue_script('rewice-scripts', 
		get_template_directory_uri() . '/dist/js/bundle.js', 
		[], '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'rewice_assets');

?>