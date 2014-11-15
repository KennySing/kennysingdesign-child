<?php

function et_child_scripts() {
	$template_dir = get_stylesheet_directory_uri();

	$theme_version = et_get_theme_version();

	wp_dequeue_script( 'divi-custom-script' );

	wp_enqueue_script( 'divi-child-custom-script', $template_dir . '/js/custom.js', array( 'jquery' ), $theme_version, true );

	wp_enqueue_script( 'divi-child-custom-script2', $template_dir . '/js/custom2.js', array( 'jquery' ), $theme_version, true );
}
add_action( 'wp_enqueue_scripts', 'et_child_scripts', 11 );

remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );