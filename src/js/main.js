// sup sup
var sound = new Howl({
    urls: ['../sounds/maggie_breath.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
        console.log('Finished!');
    }
});