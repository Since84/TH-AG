<?php

/*
 *	Enqueue all Scripts for AG
 */

	require_once( get_stylesheet_directory().'/components/peek-slider/peek-slider.php' );
	require_once( get_stylesheet_directory().'/components/box-grid/box-grid.php' );
	require_once( get_stylesheet_directory().'/components/tile-browser/tile-browser.php' );



	function ag_enqueue() {
		wp_enqueue_script( 'spark_child_site', get_stylesheet_directory_uri()."/script/site.js", array('jquery','site') );
		wp_enqueue_style( 'ag_css', get_stylesheet_directory_uri()."/style.css", array('spark_css') );
	}

	add_action('wp_enqueue_scripts', 'ag_enqueue');