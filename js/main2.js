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

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function () {
        return this * Math.PI / 180;
    }
}

function lineDistance(point1, point2) {
    var xs = 0;
    var ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
}
$(function ($) {

    var mouseXLeft = 0, mouseYLeft = 0, mouseXRight = 0, mouseYRight = 0, limitX = 70, limitY = 14;
//    initializing but not used
    var ang, i = 0;

    $(window).mousemove(function (e) {

//        var offsetLeft = $('#left').offset();
//        mouseXLeft = Math.min(e.pageX - offsetLeft.left, limitX);
//        mouseYLeft = Math.min(e.pageY - offsetLeft.top, limitY);
//        if (mouseXLeft < 0) mouseXLeft = 0;
//        if (mouseYLeft < 0) mouseYLeft = 0;
//
//        var offsetRight = $('#right').offset();
//        mouseXRight = Math.min(e.pageX - offsetRight.left, limitX);
//        mouseYRight = Math.min(e.pageY - offsetRight.top, limitY);
//        if (mouseXRight < 0) mouseXRight = 0;
//        if (mouseYRight < 0) mouseYRight = 0;

        var mousePointer = new Object,
            mouth = new Object;

        mousePointer['x'] = e.pageX;
        mousePointer['y'] = e.pageY;

        mouth['x'] = $(window).width() / 2;
        mouth['y'] = $(window).height() / 2;

        var distance = lineDistance(mousePointer, mouth);
        percDistance = distance / ($(window).width() / 2) * 100;

        if (percDistance > 100) {
            percDistance = 100;
        }

        topVal = 205 + (50 / 100 * percDistance);

        $('.mond').css({
            'top': topVal + "px"
        });
    });

//    var leftPupil = $('#leftpupil'), xp = 0, yp = 0,
//        leftLoop = setInterval(function () {
//            xp += (mouseXLeft - xp) / 1;
//            yp += (mouseYLeft - yp) / 1;
////            leftPupil.css({left: (randomFloatBetween(-5, 5,1) + xp), top: (randomFloatBetween(-5, 5,1) + yp)});
//            leftPupil.css({left: xp, top: yp});
//        }, 30);
//    var rightPupil = $('#rightpupil'), xp = 0, yp = 0,
//        rightLoop = setInterval(function () {
//            xp += (mouseXRight - xp) / 1;
//            yp += (mouseYRight - yp) / 1;
////            rightPupil.css({left: (randomFloatBetween(-5, 5,1) + xp), top: (randomFloatBetween(-5, 5,1) + yp)});
//            rightPupil.css({left: xp, top: yp});
//        }, 30);

    // Random float between
    function randomFloatBetween(minValue, maxValue, precision) {
        if (typeof(precision) == 'undefined') {
            precision = 2;
        }
        return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
    }
});

