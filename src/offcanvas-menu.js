;((w, $) => {
  'use strict';

  const NextArrow = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g data-name="Layer 2"> <g data-name="arrow-ios-forward"> <rect transform="rotate(-90 12 12)" opacity="0"/> <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"/> </g> </g> </svg>`;

  const PrevArrow = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g data-name="Layer 2"> <g data-name="arrow-ios-back"> <rect transform="rotate(90 12 12)" opacity="0"/> <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/> </g> </g> </svg>`;

  const offcanvasDisplay = () => {
    $('body').on('click' , '.sbm-button-toggle-offcanvas', function(e) {
      e.preventDefault();
      $('body').addClass('sbm-offcanvas-open')
    })

    $('body').on('click', '.sbm-offcanvas-menu', e => {
      if($(e.target).hasClass('sbm-offcanvas-menu')) {
        $('body').removeClass('sbm-offcanvas-open')
      }
    })

    $('body').on('click', '.sbm-offcanvas-menu__close', e => {
      e.preventDefault();
      $('body').removeClass('sbm-offcanvas-open')
    })
  }

  const addArrowMenuItem = () => {
    $('.sbm-offcanvas-menu').find('.__sbm-has-megamenu, .menu-item-has-children, .tab-heading-item').each(function() {
      let arrowTemp = `<span class="menu-item-toggle-sub">${ NextArrow }</span>`;
      $(this).addClass('__has-btn-toggle')
      $(this).children('a').after(arrowTemp);
    })

    $('.sbm-offcanvas-menu').find('.tab-heading-item').each(function() {
      let arrowTemp = `<span class="menu-item-back-menu">${ PrevArrow }</span>`;
      $(this).children('a').before(arrowTemp);
    })

    $('.sbm-offcanvas-menu').find('.sub-menu > li').each(function() {
      let arrowTemp = `<span class="menu-item-back-menu">${ PrevArrow }</span>`;
      $(this).children('a').before(arrowTemp);
    })
  }

  const cloneHeadingTab = () => {
    $('.sbm-offcanvas-menu').find('.tab-heading-item').each(function() {
      let __key = $(this).data('key');
      let a = $(this).children('a.nav-link').clone();
      let tabContentClass = `.sbm-offcanvas-menu .sbm-mega-menu__tab-content .tab-content-item__${ __key }`;

      // a.addClass('__back')
      $(tabContentClass).prepend($(`<div class="__back"><span class="back-arrow">${ PrevArrow }</span></div>`).append(a));
    })
  }

  const directiveSubMenuEffect = () => {
    let $menu = $('.sbm-offcanvas-menu .sbm-menu');
    let step = 0;
    $('.sbm-offcanvas-menu .menu-item-toggle-sub').on('click', function(e) {
      e.preventDefault();

      if(step == 0) {
        // console.log($(this).parent())
        $(this)
          .parent()
          .addClass('__current-active')
          .siblings()
          .removeClass('__current-active')
      } 

      step += 1;
      $menu.css({
        transform: `translateX(calc(100% * ${ step } * -1))`
      })
    })

    $('.sbm-offcanvas-menu .__back, .sbm-offcanvas-menu .menu-item-back-menu').on('click', e => {
      e.preventDefault();
      step -= 1;
      $menu.css({
        transform: `translateX(calc(100% * ${ step } * -1))`
      })
    })
  }
    
  const offcanvasMenu = () => {
    addArrowMenuItem();
    cloneHeadingTab();
    directiveSubMenuEffect();
  }

  const offcanvas = () => {
    offcanvasDisplay();
    offcanvasMenu();
  }

  $(offcanvas)
})(window, jQuery);