'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 2,
        dots: true,
        // autoplay: true,
        loop: true,
        smartSpeed: 1200,
        margin: 0,
        responsive: {
            320: {
                items: 1,
            },
            480: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Counter Up
    --------------------*/
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
        About Counter Up
    --------------------*/
    $('.ab-count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);

// Модалка

const modal = document.querySelector('.modal')
const modalButton = document.querySelectorAll('.primary-btn')

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

    if (target.closest('.modal_cancel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--opened-modal')
    }
}