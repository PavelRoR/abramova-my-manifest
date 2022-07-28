$(document).ready(function() {
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('↙ Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {

                // button.text('Отправляем...');
                // setTimeout(function () {
                //     button.text('Отправлено!');
                // }, 500);
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#4E4C4C",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#4E4C4C",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
    // Модалка
    $('.play-button').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                  index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            
                  id: 'OFbr2XaBHY0', // String that splits URL in a two parts, second part should be %id%
                  // Or null - full URL will be returned
                  // Or a function that should return %id%, for example:
                  // id: function(url) { return 'parsed id'; }
            
                  src: '//www.youtube.com/embed/OFbr2XaBHY0?autoplay=1' // URL that will be set as a source for iframe.
                },
            }
        }
    });
        // Модалка
        $('.button-up').magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'mfp-fade'
        });
/*Конец документа*/
});