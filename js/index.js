(function($) {
  const htmlWindow = $(window),
    menuButton = $('.menu-button'),
    header = $('.top-bar'),
    trigger = $('.trigger'),
    navigation = $('.navigation'),
    search = $('.search-bar'),
    recipeCard = $('.recipe-card'),
    arrowBackground = $('.arrow-background'),
    arrow = $('.arrow')

  const checkViewport = () => {
    return window.getComputedStyle(document.querySelector('.main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "")
  }

  const moveSearch = () => {
    const view = checkViewport()

    if(view === 'mobile') {
      search.detach()
      search.removeClass('is-hidden').prependTo(navigation)
    } else {
      search.detach()
      search.insertAfter(header.find('.logo'))
    }
  }

  htmlWindow.on('resize', () => {
    (!window.requestAnimationFrame) ? setTimeout(moveSearch, 300) : window.requestAnimationFrame(moveSearch);
  })

  trigger.click(event => {
    event.preventDefault()
    $([menuButton, navigation]).toggleClass('nav-is-visible')
  })

  arrowBackground.click(event => {
    recipeCard.toggleClass('flipped')
    arrowBackground.addClass('arrow-click')
    arrow.toggleClass('arrow-rotate')
  });

  arrowBackground.on('transitionend', () => {
    arrowBackground.removeClass('arrow-click');
  });

  moveSearch()
})(jQuery)
