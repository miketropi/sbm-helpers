<?php 
/*
Plugin Name: SBM Helpers
Plugin URI: #
Description: SBM Project Helpers
Version: 1.0.1
Author: Beplus
Author URI: #
License: GPLv2 or later
Text Domain: sbm-helpers
*/

/**
 * Defined
 */
define('SBM_VERSION', rand(1, 999999));
define('SBM_DIR', plugin_dir_path(__FILE__));
define('SBM_URI', plugin_dir_url(__FILE__));

/**
 * Includes
 */
require(SBM_DIR . '/inc/static.php');
require(SBM_DIR . '/inc/helpers.php');
require(SBM_DIR . '/inc/hooks.php');
require(SBM_DIR . '/inc/ajax.php');
require(SBM_DIR . '/inc/template-tags.php');

/**
 * Boot
 */