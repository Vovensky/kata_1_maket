let condition = '(min-width: 768px)';
let swiper = false;


function swiperInit(mediaQuery, elem, settings) {
    if(mediaQuery.matches && swiper) {
        swiper.destroy();
        swiper = false;
    } else if(!mediaQuery.matches && !swiper) {
        swiper = new Swiper(elem, settings)
    }
}

function checkWidth(condition) {
    let matchMedia = window.matchMedia(condition);
    let settings = {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
    let elem = '.swiper';
    swiperInit(matchMedia, elem, settings);
    matchMedia.addEventListener('change', () => swiperInit(matchMedia, elem, settings))
}

window.addEventListener('DOMContentLoaded', () => checkWidth(condition));


let button = document.querySelector('.services__button');
let container = document.querySelector('.services__wrapper');
let containerHeight = container.clientHeight;
let opened = false;

button.addEventListener('click', () => {
    openClose()
})

function openClose() {
    let containerScrollHeight = container.scrollHeight;
    if(!opened) {
        container.style.maxHeight = containerScrollHeight + 'px';
        button.textContent ='Скрыть';
        opened = true;
        button.classList.add('services__button--clicked');

    } else {
        containerHeight = containerHeight < 160 ? 160: containerHeight;
        container.style.maxHeight = containerHeight + 'px';
        button.textContent='Показать всё';
        opened = false;
        button.classList.remove('services__button--clicked')

    }

}
