function solidToggle(event) {
  event.preventDefault()
  var body = document.getElementsByTagName('body')[0]
  body.classList.toggle('no-bg')
}

function openSource(event) {
  event.preventDefault()
  window.open(
  'https://github.com/larsenwork/social.svg.min',
  '_blank'
  )
}
