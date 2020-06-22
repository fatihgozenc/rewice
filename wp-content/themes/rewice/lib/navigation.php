<?php 
//ADD NAVIGATION
function register_rewice_menus(){
	register_nav_menus([
		'header-menu' => __('Header Menu'),	
		'footer-menu' => __('Footer Menu')
	], ['show_in_rest' => true]);
};

add_action('init', 'register_rewice_menus');

?>