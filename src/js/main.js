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


    var mouseXLeft = 0, mouseYLeft = 0, mouseXRight = 0, mouseYRight = 0, limitX = 70, limitY = 11;
    $(window).mousemove(function (e) {
        var offsetLeft = $('#left').offset();
        mouseXLeft = Math.min(e.pageX - offsetLeft.left, limitX);
        mouseYLeft = Math.min(e.pageY - offsetLeft.top, limitY);
        if (mouseXLeft < 0) mouseXLeft = 0;
        if (mouseYLeft < 0) mouseYLeft = 0;

        var offsetRight = $('#right').offset();
        mouseXRight = Math.min(e.pageX - offsetRight.left, limitX);
        mouseYRight = Math.min(e.pageY - offsetRight.top, limitY);
        if (mouseXRight < 0) mouseXRight = 0;
        if (mouseYRight < 0) mouseYRight = 0;
    });

    var leftPupil = $('#leftpupil'), xp = 0, yp = 0,
        leftLoop = setInterval(function () {
            xp += (mouseXLeft - xp) / 1  ;
            yp += (mouseYLeft - yp) / 1  ;
            leftPupil.css({left: xp, top: yp});
        }, 30);
    var rightPupil = $('#rightpupil'), xp = 0, yp = 0,
        rightLoop = setInterval(function () {
            xp += (mouseXRight - xp) / 1;
            yp += (mouseYRight - yp) / 1;
            rightPupil.css({left: xp, top: yp});
        }, 30);

});

