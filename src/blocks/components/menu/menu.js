import $ from 'jquery';

let itemsMenu = $('.menu__item');
let menuWidth;
let windowWidth;

menuWidth = $('.menu').width();
windowWidth = $(window).width();
getWidth();

$(window).on('resize', function() {
    windowWidth = $(window).width();
    menuWidth = $('.menu').width();
    getWidth();
});

function getWidth() {
    if (windowWidth > 1299) {
        itemsMenu.each(function() {
            let items = $('.submenu', $(this));
            let columns = $('.submenu__content-column', $(items));
            let width = menuWidth / columns.length;
            $('.submenu__content-column', $(items)).css('width', width);
        });
    }
}