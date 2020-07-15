<?php
/**
 *
 */

function emfl_tab_control_custom_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'emfl-tab-control',
				'title' => __( 'Tab Control', 'emfl' ),
			),
		)
	);
}
add_filter( 'block_categories', 'emfl_tab_control_custom_category', 10, 2);