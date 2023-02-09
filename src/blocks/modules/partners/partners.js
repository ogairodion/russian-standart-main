import $ from 'jquery';

$('.partners__tab').on('click', function() {
    let category = $(this).data('category');
    let partners = $('.partners__item');

    $('.partners__tab').removeClass('active');
    $(this).addClass('active');

    partners.each(function() {
        let sponsorCategory = $(this).data('category');
        if (category == sponsorCategory || category == 'all') {
            $(this).removeClass('hidden');
        } else {
            $(this).addClass('hidden');
        }
    });
});