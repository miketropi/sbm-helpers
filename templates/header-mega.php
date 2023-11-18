<?php 
/**
 * Header mega
 */

?>
<header class="site-header header-template--header-mega">
  <div class="site-container">
    <div class="header-container">
      <div class="brand-image">
        <?php sbm_brand_image_tag(); ?>
      </div>
      <div class="site-nav">
        <div class="action-buttons">
          <?php sbm_header_action_buttons_tag(); ?>
        </div>
        <div class="site-menu">
          <?php sbm_navigation_location('primary'); ?>
        </div>
      </div>
    </div>
  </div>
</header> <!-- .header-template--header-mega -->