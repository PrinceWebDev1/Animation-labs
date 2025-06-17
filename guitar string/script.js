let ogPat = `M 10 200 Q 500 200 990 200`
let finalPath = `M 10 200 Q 500 200 990 200`

let string = document.querySelector('.string');
let audio = document.querySelector('audio');

string.addEventListener('mousemove', (dets) => {
    gsap.to("svg path", {
        attr: {
            d: `M 10 200 Q ${dets.x} ${dets.y} 990 200`
        },
        duration: 0.2,
    });
});

string.addEventListener('mouseleave', () => {
    gsap.to("svg path", {
        attr: {
            d: finalPath
        },
        ease: "elastic.out(1,0.1)",
        duration: 2,
    });
    audio.currentTime = 0.5;
    audio.play();   
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0.5;
    }, 1200);
});