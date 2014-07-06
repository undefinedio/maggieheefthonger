// sup sup
var sound = new Howl({
    urls: ['../sounds/maggie_breath.mp3'],
    autoplay: false,
    loop: true,
    volume: 0.5,
    onend: function () {
        console.log('Finished!');
    }
});

$(function ($) {

//    $('body').mousemove(function (kmouse) {
//        var r = 5;
//        var leftPosition = $("#lefteye").position();
//        var rightPosition = $("#righteye").position();
//        var xlEl = leftPosition.left;
//        var ylEl = leftPosition.top;
//
//        var ym = kmouse.pageY - ylEl + 20;
//        var xm = kmouse.pageX - xlEl + 20;
//
//        $('.mousfollower').css({'top': ym, 'left': xm});
//
//        console.log("r => " + r + ", xm => " + xm + "ym => " + ym);
//
//    });

    var leftPosition = $("#lefteye").position();
    var rightPosition = $("#righteye").position();
    var xlEl = leftPosition.left;
    var ylEl = leftPosition.top;

    //Variables are just used to make it obvious what each parameter is,
    //you can call the functions with the param's directly if you prefer.
    new alienEye(0, 0, 120, 'lefteye');
    new alienEye(0, 0, 120, 'righteye');


});

