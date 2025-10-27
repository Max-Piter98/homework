    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
            const accordionControl = e.target.closest('.accordion-list__control');

            if (!accordionControl) return

            e.preventDefault()

            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

        // Слайдер-галерея

    const swiper = new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 1,

        // pagination: {
        //     el: '.gallery__pagination',
        //     type: 'fraction'
        // },

        navigation: {
            nextEl: '.nav__next',
            prevEl: '.nav__prev',
        },

        // breakpoints: {
        //     601: {
        //         slidesPerView: 3,
        //     },

        //     801: {
        //         spaceBetween: 32,
        //     },

        //     1101: {
        //         slidesPerView: 4,
        //     }
        // }
    });