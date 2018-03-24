let hambtn = document.querySelector('.hamburger')

function hamBtnHandle(e) {
  e.target.parentNode.parentNode.children[1].style.display = 'inherit'
}

hambtn.addEventListener('click', hamBtnHandle)
