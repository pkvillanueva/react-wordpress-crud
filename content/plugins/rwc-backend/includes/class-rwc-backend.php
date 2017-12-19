<?php
/**
 * The file that has all the plugin core functionalities
 * 
 * @package RWC_Backend
 * @since 1.0.0
 */

/**
 * The plugin core class
 * 
 * This is used to define all the functionalities needed of the
 * plugin. It is used to define admin and public related functions.
 * 
 * @package RWC_Backend
 * @since 1.0.0
 */
class RWC_Backend {

	/**
	 * The unique name of the plugin
	 * 
	 * @since 1.0.0
	 * @var @string
	 * @access protected
	 */
	protected $plugin_ID;

	/**
	 * The current version of the plugin
	 * 
	 * @since 1.0.0
	 * @var string
	 * @access protected
	 */
	protected $version;

	/**
	 * The directory path of the plugin
	 * 
	 * @since 1.0.0
	 * @var string
	 * @access protected
	 */
	protected $plugin_dir;

	/**
	 * Define variables and load functions needed
	 * 
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->plugin_ID       = 'rwc-backend';
		$this->version         = RWC_BACKEND_VERSION;
		$this->plugin_dir      = RWC_BACKEND_DIR;
	}

	/**
	 * Start loading and initializing all the functionalities needed.
	 * 
	 * @since 1.0.0
	 */
	public function initialize() {
		/** Include classes needed. */
		require_once $this->plugin_dir . 'includes/class-rwc-backend-post-types.php';

		/** Load functions. */
		$this->run_loader();
	}

	/**
	 * Loads up the plugin textdomain
	 * 
	 * @since 1.0.0
	 */
	public function load_textdomain() {
		load_plugin_textdomain( 
			$this->plugin_ID,
			FALSE,
			$this->plugin_dir . 'languages/'
		);
	}

	/**
	 * Initialize the run loader function to add hooks and filters
	 * 
	 * @since 1.0.0
	 */
	public function run_loader() {
		/** Set plugin locale for internationalization. */
		add_action( 'plugins_loaded', array( $this, 'load_textdomain' ) );
	}
}
