// API Info Mockup
const artists = [
  {
    name: 'Nicki Minaj',
    imgName: 'Nicki-Minaj',
    tour: 'The Pink Print tour',
    date: 'July 25, 2015',
    day: 'friday'
  },
  {
    name: 'Nick Jonas',
    imgName: 'Nick-Jonas',
    tour: "'Live in concert' tour",
    date: 'July 30, 2015',
    day: 'saturday'
  },
  {
    name: 'Taylor Swift',
    imgName: 'Taylor-Swift',
    tour: 'The 1989 world tour',
    date: 'August 6, 2015',
    day: 'thursday'
  },
  {
    name: 'Sam Smith',
    imgName: 'Sam-Smith',
    tour: 'in the lonely hour tour',
    date: 'August 15, 2015',
    day: 'saturday'
  },
  {
    name: 'Iggy Azalea',
    imgName: 'Iggy-Azalea',
    tour: '"the great escape" tour',
    date: 'August 22, 2015',
    day: 'friday'
  },
  {
    name: 'Brandon Flowers',
    imgName: 'Brandon-Flowers',
    tour: 'with temper trap',
    date: 'August 30, 2015',
    day: 'saturday'
  }
]

let links = $('.navbar__links')
let close = $('.close')

function $(selection) {
  return document.querySelector(selection)
}

function event() {
  function eventLayout(artistInfo) {
    let { name, imgName, tour, date, day } = artistInfo

    let layout = `<div class="upcoming__event row">
            <div class="event__img" style="background: url('../img/${imgName}.jpg') center no-repeat;" alt="${name}" ></div>
            <div class="event__info">
                <h3 class="info__artist">${name}</h3>
                <h4 class="info__tour">${tour}</h4>
            </div>
            <div class="event__date">
                <h4>${date}</h4>
                <h4 class="day">${day}</h4>
            </div>
            <button class="event__button">
                <i class="fa fa-ticket" aria-hidden="true"> Buy Tickets </i>
            </button>
           </div>`

    return $('.wrapper').innerHTML += layout;
  }

  function artistsLoop() {
    artists.map(artistInfo => {
      eventLayout(artistInfo)
    });
  }

  artistsLoop()
}

document.addEventListener('DOMContentLoaded', () => {
  event();
})

$('.navbar__hamburger').addEventListener('click', () => {
  links.className = 'navbar__links open'
  close.style.display = 'initial'
})

close.addEventListener('click', () => {
  links.classList.remove('open')
  close.style.display = 'none'
})
