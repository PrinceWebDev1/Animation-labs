let cursor = document.querySelector('#cursor');
let image1 = document.querySelector('#image1');
let image2 = document.querySelector('#image2');
let main = document.querySelector('#main');


main.addEventListener('mousemove', (dets) => {
    gsap.to(cursor, {
        x: dets.x - 15,
        y: dets.y - 15,
        duration: 0.5,
    });
});

image1.addEventListener('mouseenter', (dets) => {
    gsap.to(cursor, {
        scale : 3,
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0px 0px 20px 5px rgba(255, 255, 255, 0.77)',
        innerHTML: 'Japan'
    });
})   

image1.addEventListener('mouseleave', (dets) => {
    gsap.to(cursor, {
        scale : 1,
        backgroundColor: '#ff0f0f',
        boxShadow: '0 0 50px 5px rgba(255, 15, 15, 0.5)',
        innerHTML: ''
    });
})   
image2.addEventListener('mouseenter', (dets) => {
    gsap.to(cursor, {
        scale : 3,
        backgroundColor: 'rgb(247, 234, 0)',
        boxShadow: '0px 0px 20px 5px rgba(247, 235, 0, 0.7)',
        innerHTML: 'China'
    });
})   

image2.addEventListener('mouseleave', (dets) => {
    gsap.to(cursor, {
        scale : 1,
        backgroundColor: '#ff0f0f',
        boxShadow:'0 0 50px 5px rgba(255, 15, 15, 0.5)',
        innerHTML: ''
    });
})   