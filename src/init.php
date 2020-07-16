<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function tab_control_block_assets() { // phpcs:ignore
	// Scripts
	wp_enqueue_script(
		'jQuery',
		'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
		null,
		null,
		false
	);
	
	wp_enqueue_script(
		'tab_control_block_script',
		plugins_url( '/dist/tab-control.js', dirname( __FILE__ ) ),
		array(),
		null,
		true
	);
	
	// Styles.
	wp_enqueue_style(
		'tab_control-block-style', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ) // Dependency to include the CSS after it.
	// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
	
	wp_enqueue_style(
		'awesome', // Handle.
		'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', // Block style CSS.
		null,
		'screen'
	);
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'tab_control_block_assets' );

function tab_control_block_edior_assets() {
	wp_enqueue_script(
		'tab_control_block_script',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		true
	);
	
	wp_enqueue_style( 'tab_control-block-editor-style',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		true
	);
}

add_action( 'enqueue_block_editor_assets', 'tab_control_block_edior_assets' );

require_once plugin_dir_path( __FILE__ ) . 'custom-category-register.php';