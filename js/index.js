(function($) {
  const htmlWindow = $(window),
    menuButton = $('.menu-button'),
    body = $('.body'),
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

  const moveItems = () => {
    const view = checkViewport()

    if(view === 'mobile') {
      search.detach()
      search.removeClass('is-hidden').prependTo(navigation)
    } else {
      search.detach()
      search.insertAfter(header.find('.logo'))
      $([navigation, menuButton, body]).removeClass('nav-is-visible')
    }
  }

  htmlWindow.on('resize', () => {
    (!window.requestAnimationFrame) ? setTimeout(moveItems, 300) : window.requestAnimationFrame(moveItems);
  })

  trigger.click(event => {
    event.preventDefault()
    $([menuButton, navigation, body]).toggleClass('nav-is-visible')
  })

  arrowBackground.click(event => {
    recipeCard.toggleClass('flipped')
    arrowBackground.addClass('arrow-click')
    arrow.toggleClass('arrow-rotate')
  });

  arrowBackground.on('transitionend', () => {
    arrowBackground.removeClass('arrow-click');
  });

  moveItems()
})(jQuery)
