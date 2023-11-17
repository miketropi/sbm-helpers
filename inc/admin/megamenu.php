<?php 
/**
 * Megamenu 
 */

add_action('admin_footer', 'sbm_admin_megamenu_popup_config');

function sbm_admin_megamenu_popup_config() {
  ?>
  <div class="sbm-megamenu-config-popup">
    <div class="sbm-megamenu-config-popup__inner">
      <a href="#" class="sbm-megamenu-config-popup__close"><?php _e('✕ Close', 'sbm-helpers') ?></a>
      <div id="SBM_MEGAMENU_CONFIG_ROOT">

      </div> <!-- #SBM_MEGAMENU_CONFIG_ROOT --> 
    </div> 
  </div> <!-- .sbm-megamenu-config-popup -->
  <?php
} 