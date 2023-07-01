document.querySelectorAll('.gallery__img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.gallery__popup').style.display = 'block'
    document.querySelector('.gallery__popup-img').src = image.getAttribute('src')
  }
})

document.querySelector('.gallery__popup-close').onclick = () => {
  document.querySelector('.gallery__popup').style.display = 'none'
}


class Accordion {
  constructor(selector, index) {
    this.el = document.querySelector(selector);
    this.cards = this.el.querySelectorAll('.card');
    this.cardHeader();
  };

  cardHeader() {

    this.cards.forEach((card, index) => {
      const header = card.querySelector('.card-header');
      header.addEventListener('click', () => {
        this.currentIndex = index;
        this.renderContent();
      })
    })
  }

  renderContent() {
    this.cards.forEach((card, index) => {
      if (index === this.currentIndex) {
        card.classList.toggle('open');
      } else {
        card.classList.remove('open');
      }
    })
  }
}

new Accordion('.accordion');


const menu = document.querySelector('.header__menu-box');
const burger = document.querySelector('.header__burger-box')
const menuLinks = document.querySelectorAll('.header__menu-link')

burger.addEventListener('click', function () {
  menu.classList.toggle('header__active-menu')
})

if (menuLinks.length > 0) {
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
      menu.classList.toggle('header__active-menu')
    })
  }
}

const headerBg = document.querySelector('.header__fix');
const headerHeight = document.querySelector('.header__top-inner');

window.addEventListener('scroll', function () {
  if (window.scrollY > 5) {
    headerBg.classList.add('_header-small')
    headerHeight.classList.add('_header-small')
    // headerBg.style.height = '50px'
    // headerHeight.style.height = '50px'
  } else {
    headerBg.classList.remove('_header-small')
    headerHeight.classList.remove('_header-small')
  }
});
