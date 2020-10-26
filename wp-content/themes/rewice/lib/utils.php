<?php

//REMOVE POSTS SECTION
function remove_posts () {
	remove_menu_page('edit.php');
} 

add_action('admin_menu', 'remove_posts');

//GET NAVIGATION

function get_navigation($menu_slug){
	$menu_locations = get_nav_menu_locations();
	$menu_ID = $menu_locations[$menu_slug];
	$menu_query = wp_get_nav_menu_items($menu_ID);

	$menu = [];
	$menu_child_items = [];
	
	foreach($menu_query as $i => $menu_item) {
		if($menu_item->menu_item_parent == 0){
			array_push($menu, [
				'id' => $menu_item->ID,
				'title' => $menu_item->title,
				'url' => $menu_item->url,
				'children' => []
			]);
		} else {
			array_push($menu_child_items, [
				'id' => $menu_item->ID,
				'parent_id' => $menu_item->menu_item_parent,
				'title' => $menu_item->title,
				'url' => $menu_item->url
			]);
		}
	}

	foreach($menu_child_items as $i => $child_item){
		foreach($menu as $i => $parent_item){
			if ($child_item['parent_id'] == $parent_item['id']){
				array_push($menu[$i]['children'], $child_item);
			}
		}
	}
	return $menu;
}

//ADD ACF OPTIONS SECTION
if(function_exists('acf_add_options_page')) {
	acf_add_options_page();
	acf_add_options_sub_page('Info');
}
add_theme_support( 'post-thumbnails' );

/**
 * Disable the emoji's
 */
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
	add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
 }
 add_action( 'init', 'disable_emojis' );
 
 function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
	return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
	return array();
	}
 }

 function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
	if ( 'dns-prefetch' == $relation_type ) {
	/** This filter is documented in wp-includes/formatting.php */
	$emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );
 
 $urls = array_diff( $urls, array( $emoji_svg_url ) );
	}
 
 return $urls;
 }

function smartwp_remove_wp_block_library_css(){
 wp_dequeue_style( 'wp-block-library' );
 wp_dequeue_style( 'wp-block-library-theme' );
}
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css' );

//ADD SVG SUPPORT
function cc_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
 }
 add_filter('upload_mimes', 'cc_mime_types');

// Close comments on the front-end
add_filter('comments_open', '__return_false', 20, 2);
add_filter('pings_open', '__return_false', 20, 2);

//REMOVE EDITOR FOR SPESIFIC PAGES
function hide_editor() {
	// Get the Post ID
	if( isset( $_GET['post'] ) ) $post_id = $_GET['post'];
	elseif( isset( $_POST['post_ID'] ) ) $post_id = $_POST['post_ID'];
	if( !isset( $post_id ) ) return;
	
	$template_file = get_post_meta($post_id, '_wp_page_template', true);

	if(
			$template_file == 'page-home.php' ||
			$template_file == 'page-kontakt.php' ||
			$template_file == 'page-leistungen.php'){
		remove_post_type_support('page', 'editor');
	}
}

add_action( 'admin_init', 'hide_editor' );

?>
