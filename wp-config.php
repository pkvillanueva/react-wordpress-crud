<?php
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/wp/' );
}

/** Sets up site configuration, composer autoload, WordPress vars and included files. */
require_once( __DIR__ . '/vendor/autoload.php' );
require_once( __DIR__ . '/config/config.php' );
require_once( ABSPATH . 'wp-settings.php' );
