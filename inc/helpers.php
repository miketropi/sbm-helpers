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
  $data['settings']['extra_content'] = htmlspecialchars($data['settings']['extra_content']);
  // update_option('__SBM_MEGA_MENU_ITEM_EXTRA_CONTENT_' . $id, $data);
  update_option('__SBM_MEGA_MENU_ITEM_' . $id, $data);
}

function sbm_get_mega_item($id) {
  $opts = get_option('__SBM_MEGA_MENU_ITEM_' . $id);
  $opts['settings']['extra_content'] = sbm_fix_quote_html(htmlspecialchars_decode($opts['settings']['extra_content']));
  return $opts;
}

function sbm_navigation_location($location = '') {
  wp_nav_menu([
    'theme_location' => $location,
    'menu_class' => 'menu sbm-menu',
    'walker' => new SBM_Mega_Menu_Walker(), 
  ]);
}

function sbm_fix_quote_html($html) {
  $search = ['\"', "\'"];
  $replace = ['"', "'"];

  return str_replace($search, $replace, $html);
}