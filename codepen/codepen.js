function solidToggle(event) {
  event.preventDefault()
  var social = document.getElementsByClassName('social')[0]
  social.classList.toggle('no-bg')
}

function openSource(event) {
  event.preventDefault()
  window.open(
  'https://github.com/larsenwork/social.svg.min',
  '_blank'
  )
}
