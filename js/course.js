$(document).ready(function() {
    // Якорь 
        /* Якорь */
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    // Модалка
    $('.play-button').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                  index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            
                  id: 'J_jh9-hnQX0', // String that splits URL in a two parts, second part should be %id%
                  // Or null - full URL will be returned
                  // Or a function that should return %id%, for example:
                  // id: function(url) { return 'parsed id'; }
            
                  src: '//www.youtube.com/embed/J_jh9-hnQX0?autoplay=1' // URL that will be set as a source for iframe.
                },
            }
        }
    });
    $('.more-button').magnificPopup()
/*Конец документа*/
});