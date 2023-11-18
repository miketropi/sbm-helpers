<?php 
/**
 * hoosk
 */

add_filter('sbm_mega_walker_nav_menu_start_el', 'sbm_mega_menu_start_el', 20, 4);

function sbm_mega_menu_start_el($item_output, $menu_item, $depth, $args) {
  if($depth != 0) return $item_output;

  ob_start();
  sbm_mega_menu_tag($menu_item->ID);
  $megamenu_content = ob_get_clean();

  return $item_output . $megamenu_content;
}

add_filter('nav_menu_link_attributes', '', 20 , 4);

function sbm_megamenu_nav_menu_link_attributes($atts, $menu_item, $args, $depth) {
  return $atts;
}