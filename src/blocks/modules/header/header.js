import $ from 'jquery';
global.$ = global.jQuery = $;
// eslint-disable-next-line no-unused-vars
import fancybox from "@fancyapps/fancybox";
import LazyLoad from "vanilla-lazyload";
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
const lazyLoadInstance = new LazyLoad({});

$('[data-fancybox]').fancybox({
    beforeShow: function(){
        $("html, body").css({'overflow-y':'hidden'});
    },
    afterClose: function(){
        $("html, body").css({'overflow-y':'visible'});
    },
})

let windowWidth; 
let contacts = $('.contacts__item');

windowWidth = $(window).width();

$(window).on('resize', function() {
    windowWidth = $(window).width();

    if (windowWidth > 1299) {
        $("html, body").removeClass('open');
    }
});

$('.dropdown-top').on('click', function() {
    let dropdown = $(this).closest('.dropdown');
    $(dropdown).toggleClass('open');
});

$('.header__burger').on('click', function() {
    $('body, html').toggleClass('open');
});

switches();

function switches() {
    let switches = $('.switches'),
        switchItems = $('.switch'),
        after = $('.switches-after');

        switchItems.each(function(i) {
            const attr = $(this).data('switch');
            const diff = i > 0 ? this.offsetLeft - 2 : this.offsetLeft + 2;

            if ($(this).hasClass('active')) {
                after.css({
                    'width': $(this).outerWidth(),
                    'left': diff,
                });

                contacts.addClass('hidden');

                getContact(attr);
            }
        });
}

$('.switch').on('click', function() {
    $('.switch').removeClass('active');
    $(this).addClass('active');
    switches();
});

function getContact(attr) {
    contacts.each(function() {
        const attrContact = $(this).data('switch');

        if (attr == attrContact) {
            $(this).removeClass('hidden');
        }
    });
}

$('.menu__item-arrow').on('click', function() {
    openMenuItem($(this));
});

function openMenuItem(item) {
    if (windowWidth < 1299) {
        let menuItem = item.closest('.menu__item');
        $(menuItem).toggleClass('open');
    }
};

$(document).mouseup( function(e){ 
    let header = $(e.target).closest('.header');

    if (header.length == 0) {
        $('html, body').removeClass('open');
    }
});
