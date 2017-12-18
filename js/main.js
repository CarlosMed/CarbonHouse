function $(selection) {
  return document.querySelector(selection)
}

$('.navbar__hamburger').addEventListener('click', e => {
    $('.navbar__links').className += ' open'
})

window.addEventListener('scroll', e => {
  if ($('.navbar__links').className === 'navbar__links open') {
    $('.navbar__links').classList.remove('open')
  }
})
