(function($) {
  const menuButton = $('.menu-button'),
        trigger = $('.trigger')

  trigger.click(event => {
    event.preventDefault()
    $(menuButton).toggleClass('nav-is-visible')
  })
})(jQuery)
