(function($) {
  const htmlWindow = $(window),
    menuButton = $('.menu-button'),
    header = $('.top-bar'),
    trigger = $('.trigger'),
    navigation = $('.navigation'),
    search = $('.search-bar')

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

  moveSearch()
})(jQuery)
