<?php
/** Project root folder. */
$root_dir = dirname( __DIR__ );

/** Load environment file and validate required settings. */
$env = new Dotenv\Dotenv( $root_dir );
$env->load();
$env->required( array( 'WP_ENV', 'WP_HOME', 'WP_SITEURL', 'DB_NAME', 'DB_USER', 'DB_PASSWORD' ) );

/** Get environment setting. */
define( 'WP_ENV', getenv( 'WP_ENV' ) ?: 'production' );

$env_file_name = 'env-' . WP_ENV . '.php';
$env_path = $root_dir . '/config/' . $env_file_name;

if ( file_exists( $env_path ) ) {
	require_once( $env_path );
}

/** Set core and site url. */
define( 'WP_HOME', getenv( 'WP_HOME' ) ?: $_SERVER['HTTP_HOST'] );
define( 'WP_SITEURL', getenv( 'WP_SITEURL' ) ?: $_SERVER['SERVER_NAME'] . '/wp' );

/** Set content local path and full url.*/
define( 'WP_CONTENT_DIR', $root_dir . '/content' );
define( 'WP_CONTENT_URL', WP_HOME . '/content' );

/** MySQL database settings. . */
define( 'DB_NAME', getenv( 'DB_NAME' ) );
define( 'DB_USER', getenv( 'DB_USER' ) );
define( 'DB_PASSWORD', getenv( 'DB_PASSWORD' ) );
define( 'DB_HOST', getenv( 'DB_HOST' ) ?: 'localhost' );

/** Optional database settings.  */
define( 'DB_CHARSET', getenv( 'DB_CHARSET' ) );
define( 'DB_COLLATE', getenv( 'DB_COLLATE' ) );

/** WordPress table prefix. */
$table_prefix = getenv( 'DB_PREFIX' ) ?: 'wp_';

/** Authentication keys and salts. */
define( 'AUTH_KEY', getenv( 'AUTH_KEY' ) );
define( 'SECURE_AUTH_KEY', getenv( 'SECURE_AUTH_KEY' ) );
define( 'LOGGED_IN_KEY', getenv( 'LOGGED_IN_KEY' ) );
define( 'NONCE_KEY', getenv( 'NONCE_KEY' ) );
define( 'AUTH_SALT', getenv( 'AUTH_SALT' ) );
define( 'SECURE_AUTH_SALT', getenv( 'SECURE_AUTH_SALT' ) );
define( 'LOGGED_IN_SALT', getenv( 'LOGGED_IN_SALT' ) );
define( 'NONCE_SALT', getenv( 'NONCE_SALT' ) );
