<?php
/**
 * Runs on plugin activate
 *
 * @package RWC_Backend
 * @since 1.0.0
 */

/**
 * The class to use on activating the plugin
 * 
 * @package RWC_Backend
 * @since 1.0.0
 */
class RWC_Backend_Activator {

	/**
	 * Initial function to to run on activate
	 * 
	 * @since 1.0.0
	 */
	public static function activate() {
		/** Include files needed. */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-rwc-backend-post-types.php';

		/** Initial post type registration for rewrite rules. */
		$post_types = new RWC_Backend_Post_Types();
		$post_types->register_post_types();

		/** Do this now! */
		flush_rewrite_rules();
	}
}
