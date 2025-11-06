// Модалка

const modal = document.querySelector('.modal')
const modalButton = document.querySelectorAll('.button')

modalButton.forEach(button => {
    button.addEventListener('click', openModal)
})

modal.addEventListener('click', closeModal)

function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
}

function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--opened-modal')
    }
}

// Модалка (все объявления)

const modalSchool = document.querySelector('.modal__school')
const modalSchoolButton = document.querySelectorAll('.school__button')

modalSchoolButton.forEach(schoolButton => {
    schoolButton.addEventListener('click', openModalSchool)
})

modalSchool.addEventListener('click', closeModalSchool)

function openModalSchool(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal__school')
}

function closeModalSchool(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal__school')) {
        document.body.classList.remove('body--opened-modal__school')
    }
}

// Модалка (все вакансии)

const modalJob = document.querySelector('.modal__job')
const modalJobButton = document.querySelectorAll('.job__button')

modalJobButton.forEach(jobButton => {
    jobButton.addEventListener('click', openModalJob)
})

modalJob.addEventListener('click', closeModalJob)

function openModalJob(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal__job')
}

function closeModalJob(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal__job')) {
        document.body.classList.remove('body--opened-modal__job')
    }
}

// Модалка (ввод телефона)

document.querySelector('#phone').onkeydown = function (e) {
    inputphone(e, document.querySelector('#phone'))
}

function inputphone(e, phone) {
    function stop(evt) {
        evt.preventDefault();
    }

    let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)

    if (not == 1 || 'Backspace' === not) {
        if ('Backspace' != not) {
            if (v.length < 3 || v === '') { phone.value = '+7 (' }
            if (v.length === 7) { phone.value = v + ') ' }
            if (v.length === 12) { phone.value = v + '-' }
            if (v.length === 15) { phone.value = v + '-' }
        }
    } else { stop(e) }
}

// Модалка (ввод даты)

document.querySelector('#day').onkeydown = function (e) {
    inputday(e, document.querySelector('#day'))
}

function inputday(e, day) {
    function stop(evt) {
        evt.preventDefault();
    }
    let key = e.key, v = day.value; not = key.replace(/([0-9])/, 1)

    if (not == 1 || 'Backspace' === not) {
        if ('Backspace' != not) {
            if (v.length === 2) { day.value = v + '.' }
            if (v.length === 5) { day.value = v + '.' }
        }
    } else { stop(e) }
}

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