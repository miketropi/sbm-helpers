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

function sbm_update_mega_item($id, $data) {
  update_option('__SBM_MEGA_MENU_ITEM_' . $id, $data);
}

function sbm_get_mega_item($id) {
  $opts = get_option('__SBM_MEGA_MENU_ITEM_' . $id);
  return $opts;
}