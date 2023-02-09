import $ from 'jquery';

let dropdowns = $('.faq__dropdowns .dropdown')

$('.faq__category').on('click', function() {
    const attr = $(this).data('category');

    dropdowns.each(function() {
        const dropdownCategory = $(this).data('category');

        if (attr == dropdownCategory || attr == 'all') {
            $(this).removeClass('hidden');
        } else {
            $(this).addClass('hidden');
        }
    });
});