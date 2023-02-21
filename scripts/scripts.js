//повторяющиеся переменные
const header = document.querySelector('.header');

//плавный скролл
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = header.offsetHeight;
      //const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

//появление стики-хедера при скролле
const hero = document.querySelector('.hero');

document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('scroll', () => {

    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight / 2;

    if (scrollTop >= heroCenter) {
      header.classList.add('header_sticky')
      hero.style.marginTop = header.offsetHeight;
    }  else {
      header.classList.remove('header_sticky')
      hero.style.marginTop = '0px';
    };

  });
});

//хедер-бургер
const headerBurger = document.querySelector('.header__burger');
const headerLinks = document.querySelector('.header__links');
const headerLink = document.querySelectorAll('.header__link');

headerBurger.addEventListener('click', () => {
  document.body.classList.toggle('stop-scroll');
  headerBurger.classList.toggle('header__burger_active');
  headerLinks.classList.toggle('header__links_visible');
});

headerLink.forEach(el => {
  el.addEventListener('click', () => {
    document.body.classList.remove('stop-scroll');
    headerBurger.classList.remove('header__burger_active');
    headerLinks.classList.remove('header__links_visible');
  });
});

//актуальный возраст
const age = document.getElementById('age');

let birth = new Date(1980, 2, 2),
    year = birth.getFullYear(),
    today = new Date();
let writeAge = today.getFullYear() - year - (today.getTime() < birth.setFullYear(year));

age.innerHTML = writeAge;
