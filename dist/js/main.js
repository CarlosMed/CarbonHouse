function $(selection) {
  return document.querySelector(selection)
}

let links = $('.navbar__links')

$('.navbar__hamburger').addEventListener('click', () => links.className = 'navbar__links open');
