const swiperModule = function() {

    const swiper = new Swiper('.first-screen__slider', {

        allowTouchMove: false,

        pagination: {
            el: '.first-screen__slider-counter',
            type: 'fraction'
        },

        autoplay: {
            delay: 3000,
        },
    })

    const portfolioSlider = new Swiper('.portfolio-slider', {

        allowTouchMove: false,
        
        navigation: {
            nextEl: '.portfolio__slider-next-button',
            prevEl: '.portfolio__slider-prev-button',
        },

        pagination: {
            el: '.portfolio__slides-counter',
            type: 'fraction'
        },

        breakpoints: {

            1140: {
                centeredSlides: true,
                slidesPerView: 4, 
                spaceBetween: 40,
            },

            860: {
                slidesPerView: 3,
                spaceBetween: 40,
            },

            530: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            320: {
                slidesPerView: 1,
            }
        }
    });
};

const selectNodule = function() {
    const selectTrigger = document.querySelector('.header__select-trigger');
    const selectTriggerText = document.querySelector('.header__select-trigger-text');
    const selectList = document.querySelector('.header__select-list');

    selectTrigger.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.header__select-trigger')) {
            selectTrigger.classList.toggle('active')
            selectList.classList.toggle('active')
        };
    });

    selectList.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('header__select-list-item')) {
            selectTriggerText.textContent = target.textContent;
            selectTrigger.classList.remove('active')
            selectList.classList.remove('active')
        };
    });
};

const burgerMenuModule = function() {

    const openButton = document.querySelector('.header__burger-menu-button');
    const burgerMenu = document.querySelector('.burger-menu-container');


    openButton.addEventListener('click', () => { burgerMenu.classList.add('active'); });

    burgerMenu.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest('.burger-menu__close-button')) {
            burgerMenu.classList.remove('active');
        };
    });
};

burgerMenuModule();
selectNodule();
swiperModule();