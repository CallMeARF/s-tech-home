//Hero
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.hero-content').classList.add('muncul');
    }, 1000);
});

// Info Panel
$(document).ready(function () {
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        if (wScroll > $('.hero').offset().top - $(window).height()) {
            $('.info-panel .card').each(function (i) {
                setTimeout(function () {
                    $('.info-panel .card').eq(i).addClass('muncul');
                }, 400 * (i + 1));
            });
        }
    });
});

// Service Panel
$(document).ready(function () {
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        if (wScroll > $('.services-panel-head').offset().top - $(window).height() + 100) {
            $('.services-panel-head h4').addClass('muncul');

            setTimeout(function () {
                $('.services-panel-body').addClass('muncul');
            }, 300);

            setTimeout(function () {
                $('.services-panel-body .service-item').each(function (i) {
                    var serviceItem = $(this);
                    setTimeout(function () {
                        serviceItem.css('opacity', 1);
                        serviceItem.find('img').css('transform', 'translateY(0)');
                        serviceItem.find('h4').css('transform', 'translateX(0)');
                    }, 300 * (i + 1));
                });
            }, 300);
        }
    });
});

// pv & Footer
$(document).ready(function () {
    var videoDuration = 2000;

    $('.video-wrapper').css('--video-duration', videoDuration + 'ms');

    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        if (wScroll > $('.pv').offset().top - $(window).height()) {
            $('.video-wrapper').addClass('muncul');

            setTimeout(function () {
                var statBoxes = $('.stat-box').get();
                $.each(statBoxes, function (i, el) {
                    setTimeout(function () {
                        $(el).addClass('muncul');
                    }, 300 * (i + 1));
                });

                setTimeout(function () {
                    $('.footer-container').addClass('muncul');
                    $('.footer-bottom').addClass('muncul');
                }, 300 * statBoxes.length + 500);
            }, videoDuration);
        }
    });
});



