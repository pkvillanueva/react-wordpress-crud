<?php
/**
 * Use to define actions, filters and functions
 * 
 * @package RWC_Frontend
 * @since 1.0.0
 */

/** Define the theme version. */
define( 'RWC_FRONTEND_VERSION', '1.0.0' );

/**
 * The main theme class
 * 
 * @package RWC_Frontend
 * @since 1.0.0
 */
class RWC_Frontend {

	/**
	 * Define variables and call functions needed
	 * 
	 * @since 1.0.0
	 */
	public function __construct() {
		/** Add theme actions. */
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}

	/**
	 * Enqueue the scripts needed for this theme
	 * 
	 * @since 1.0.0
	 */
	public function enqueue_scripts() {
		/** Register the app bundled script. */
		wp_enqueue_script( 
			'rwc-frontend', 
			get_template_directory_uri() . '/build/bundle.js', 
			array(), 
			( WP_ENV === 'production' ) ? RWC_FRONTEND_VERSION : time(), 
			true 
		);

		/** Localize script to use. */
		wp_localize_script( 'rwc-frontend', 'WPOBJ', array(
			'restRoot' => esc_url_raw( rest_url() )
		) );
	}
}

/** Simply run the class. */
new RWC_Frontend();
