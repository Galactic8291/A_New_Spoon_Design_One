(function($) {
  const menuButton = $('.menu-button'),
    trigger = $('.trigger'),
    navigation = $('.navigation')

  trigger.click(event => {
    event.preventDefault()
    $([menuButton, navigation]).toggleClass('nav-is-visible')
  })
})(jQuery)
