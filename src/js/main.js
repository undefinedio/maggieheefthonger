// sup sup
var sound = new Howl({
    urls: ['../sounds/maggie_breath.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function () {
        console.log('Finished!');
    }
});

$(function ($) {

    var mouseXLeft = 0, mouseYLeft = 0, mouseXRight = 0, mouseYRight = 0, limitX = 70, limitY = 14;
//    initializing but not used
    var ang, i = 0;

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
            xp += (mouseXLeft - xp) / 1;
            yp += (mouseYLeft - yp) / 1;
//            leftPupil.css({left: (randomFloatBetween(-5, 5,1) + xp), top: (randomFloatBetween(-5, 5,1) + yp)});
            leftPupil.css({left: xp, top: yp});
        }, 30);
    var rightPupil = $('#rightpupil'), xp = 0, yp = 0,
        rightLoop = setInterval(function () {
            xp += (mouseXRight - xp) / 1;
            yp += (mouseYRight - yp) / 1;
//            rightPupil.css({left: (randomFloatBetween(-5, 5,1) + xp), top: (randomFloatBetween(-5, 5,1) + yp)});
            rightPupil.css({left: xp, top: yp});
        }, 30);

    // Random float between
    function randomFloatBetween(minValue,maxValue,precision){
        if(typeof(precision) == 'undefined'){
            precision = 2;
        }
        return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));
    }
});

