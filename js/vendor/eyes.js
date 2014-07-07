// Two eyes on a canvas that follow the mouse cursos
// just like xeyes
// Copyright (c) 2013 Niels Doorn

var canvas;
var context;
var mx = 0;
var my = 0;
var easeValue = .05;

var eyes = [
    {
        'centerX' : 190,
        'centerY' : 289 + 71,
        'radius' : 50
    },
    {
        'centerX' : 433,
        'centerY' : 203 + 71,
        'radius' : 50
    },
//    {
//        'centerX' : 212,
//        'centerY' : 168,
//        'radius' : 50
//    },
//    {
//        'centerX' : 473,
//        'centerY' : 128,
//        'radius' : 50
//    }
]

window.onload = function() {
    canvas = document.getElementById('eyes');
    context = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 633;
    window.onmousemove = function(e) {
        mx = Math.min(e.pageX - 212);
        my = Math.min(e.pageY - 168/1.5);
        if (mx < 0) mx = 0;
        if (my < 0) my = 0;
    };
    tekenFrame();
}

function tekenFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < eyes.length; i++) {
        drawEye(eyes[i]);
    };
    // loop
    requestAnimationFrame(tekenFrame);
}

function drawEye(eye) {
    bepaalCoordinaten(eye);

    // clip the eye
    context.save();
    context.beginPath();
    context.arc(eye.centerX, eye.centerY, eye.radius, 0, Math.PI * 2);
    context.clip();

    // eye
    context.beginPath();
    context.arc(eye.centerX, eye.centerY, eye.radius, 0, Math.PI * 2);
    context.fillStyle = "#fff";
    context.fill();
    context.closePath();

    // iris
    context.drawSvg("../img/iris.svg", eye.centerX + eye.pupilX - eye.radius / 2, eye.centerY + eye.pupilY -eye.radius , 50, 90);
//    context.beginPath();
//    context.arc(eye.centerX + eye.pupilX, eye.centerY + eye.pupilY, eye.radius / 2, 0, Math.PI * 2);
//    context.fillStyle = "#007";
//    context.fill();
//    context.closePath();

//    // pupil
//    context.beginPath();
//    context.arc(eye.centerX + eye.pupilX, eye.centerY + eye.pupilY, eye.radius / 5, 0, Math.PI * 2);
//    context.fillStyle = "#000";
//    context.fill();
//    context.closePath();

    context.restore();
}

function bepaalCoordinaten(eye) {
    // afstand van middenpunt oog tot cursor
    dx = mx - eye.centerX;
    dy = my - eye.centerY;
    // stelling van pythagoras
    c = Math.sqrt((dx*dx) + (dy*dy));

    // afstand middelpunt tot pupil
    r = eye.radius * 0.8;

    // cursor op oog
    if (Math.abs(dx) < r && Math.abs(dy) < r && c < r) {
        r = c;
    }

    // hoek bepalen
    alfa = Math.asin(dy / c);

    // coordinaten op rand cirkel bepalen
    eye.pupilX = Math.cos(alfa) * r;
    // 180 graden fout herstellen
    eye.pupilX = (dx < 0 ? eye.pupilX * -1 : eye.pupilX);
    eye.pupilY = Math.sin(alfa) * r;
}