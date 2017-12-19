<?php
/**
 * Plugin Name: React WordPress CRUD Back-end
 * Plugin URI:  https://github.com/pkvillanueva/react-wordpress-crud
 * Description: The custom plugin for the back-end functionalities of the application.
 * Version:     1.0.0
 * Author:      Patrick Villanueva
 * Author URI:  https://pkvillanueva.com
 * Text Domain: rwc-backend
 * Domain Path: /languages
 *
 * @package RWC_Backend
 * @since 1.0.0
 */

/** Prevent this file accessing directly. */
if ( ! defined( 'WPINC' ) ) {
	exit;
}

/** Define current version of the plugin. */
define( 'RWC_BACKEND_VERSION', '1.0.0' );

/** Define directory path of the plugin. */
define( 'RWC_BACKEND_DIR', plugin_dir_path( __FILE__ ) );

/** Run on activation. */
function rwc_backend_on_activate() {
	require_once RWC_BACKEND_DIR . 'includes/class-rwc-backend-activator.php';
	RWC_Backend_Activator::activate();
}
register_activation_hook( __FILE__, 'rwc_backend_on_activate' );

/** Run on deactivation. */
function rwc_backend_on_deactivate() {
	require_once RWC_BACKEND_DIR . 'includes/class-rwc-backend-deactivator.php';
	RWC_Backend_Deactivator::deactivate();
}
register_deactivation_hook( __FILE__, 'rwc_backend_on_deactivate' );

/** Include the plugin core class file. */
require_once RWC_BACKEND_DIR . 'includes/class-rwc-backend.php';

/**
 * Main execution of the plugin
 *
 * @since 1.0.0
 */
function rwc_backend_initialize() {
	$rwc_backend = new RWC_Backend();
	$rwc_backend->initialize();
}
rwc_backend_initialize();
