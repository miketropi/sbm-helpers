;((w, $) => {
  'use strict';

  const megaMenuActiveTab = () => {
    $('body').on('mouseover', '.sbm-mega-menu__tab-heading-ul .tab-heading-item', function(e) {
      let __key = $(this).data('key');
      let __content_class = `.tab-content-item__${ __key }`;

      $(this).addClass('__active').siblings().removeClass('__active');
      $(__content_class).addClass('__active').siblings().removeClass('__active');
    })
  }

  const menuMenu = () => {
    megaMenuActiveTab();
  }

  const menu = () => {
    menuMenu();
  }

  $(menu)
})(window, jQuery)