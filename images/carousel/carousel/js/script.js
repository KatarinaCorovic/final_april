// var user;

// if(ime == 'vlada') {
//     user = 'vlada';
// } else {
//     user = 'guest';
// }
// user = (ime == 'vlada') ? 'vlada' : 'guest';

$('li:last-child').prependTo('ul');

var interval = setInterval(function(){
    moveSlides('forward');
}, 2000);

$('button').on('click', function () {
    clearInterval(interval);
})

$('.next').on('click', function(){
    moveSlides('forward');
});

$('.prev').on('click', function(){  
    moveSlides('backward')
});


/**
 * Move slides in any direction
 *
 * @param direction (can be "forward" or "backward")
 */
function moveSlides(direction) {
    var button = (direction == "forward") ? '.next' : '.prev';
    $(button).prop('disabled', true);
    (direction == "forward") ?  $('li:first-child').appendTo('ul') : $('li:last-child').prependTo('ul');
    var signCancel = (direction == 'forward') ? "+" : '-';
    var signAnimate = (direction == 'forward') ? "-" : '+';
    $('ul').css('left', signCancel + '=300px');

    $('ul').animate({
        left: signAnimate + '=300px'
    }, {
        done: function(){   
            $(button).prop('disabled', false);
        }
    });
}