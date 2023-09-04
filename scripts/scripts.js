//актуальный год
const currentYear = document.getElementById('currentYear');
currentYear.innerHTML = new Date().getFullYear();

//custom-scroll
Array.prototype.forEach.call(
    document.querySelectorAll('.custom-scroll'),
    el => new SimpleBar()
);

//актуальный возраст
const currentAge = document.getElementById('currentAge');
const currentAgeMobile = document.getElementById('currentAgeMobile');

let birth = new Date(1980, 2, 2),
    year = birth.getFullYear(),
    today = new Date();

currentAge.innerHTML = today.getFullYear() - year - (today.getTime() < birth.setFullYear(year));
currentAgeMobile.innerHTML = today.getFullYear() - year - (today.getTime() < birth.setFullYear(year));
