<?php 
/**
 * Helper functions
 */

function sbm_helpers_load_template($name, $require_once = false) {
  load_template( SBM_DIR . '/templates/' . $name . '.php', $require_once );
}

function sbm_helpers_header_mega() {
  sbm_helpers_load_template('header-mega');
}