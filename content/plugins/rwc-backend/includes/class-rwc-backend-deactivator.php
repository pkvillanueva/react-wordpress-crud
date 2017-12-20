<?php
/**
 * Runs on plugin deactivate
 *
 * @package RWC_Backend
 * @since 1.0.0
 */

/**
 * The class to use on deactivating the plugin
 * 
 * @package RWC_Backend
 * @since 1.0.0
 */
class RWC_Backend_Deactivator {

	/**
	 * Initial function to to run on deactivate
	 * 
	 * @since 1.0.0
	 */
	public static function deactivate() {
		/** Unregister before flush rewrite post types. */
		unregister_post_type( 'applicant' );

		flush_rewrite_rules();
	}
}
