<?php
/**
 * Plugin Name: Gutenberg Tab Control
 * Plugin URI: https://github.com/emfluenceindia/Gutenberg-Block-Tab-Control
 * Description: Ability to place a tabbed-data control on a page or post. The block lets you create tab items and associated content for each item.
 * Author: Subrata Sarkar
 * Author URI: https://subratasarkar.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package emfl
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';


/**
 * List of blocks
 * https://www.pair.com/support/kb/gutenberg-editor-block-types/
 * Reusable blocks
 * https://www.pair.com/support/kb/gutenberg-editor-how-to-create-reusable-blocks/
 */
