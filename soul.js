const smilePath = "M199.163 4.65059e-06C192.79 39.9643 150.823 70.8319 100 70.8319C49.1772 70.8319 7.20957 39.9643 0.8373 0C0.284907 3.46439 0 6.99714 0 10.5841C0 55.5489 44.7715 92 100 92C155.228 92 200 55.5489 200 10.5841C200 6.99714 199.715 3.4644 199.163 4.65059e-06Z";
const happyPath = "M199.163 4.76837e-06C199.163 4.76837e-06 150.823 0 100 0C49.1772 0 0.8373 0 0.8373 0C0.284907 3.46439 0 6.99714 0 10.5841C0 55.5489 44.7715 92 100 92C155.228 92 200 55.5489 200 10.5841C200 6.99714 199.715 3.4644 199.163 4.76837e-06Z";
const sadPath = "M0.837296 92C7.20956 52.0357 49.1772 21.1682 100 21.1682C150.823 21.1682 192.79 52.0357 199.163 92C199.715 88.5356 200 85.0029 200 81.4159C200 36.4512 155.228 7.62939e-06 100 7.62939e-06C44.7715 7.62939e-06 0 36.4512 0 81.4159C0 85.0029 0.284897 88.5356 0.837296 92Z";
var eye_size = Math.min(screen.width,screen.height)*(0.2);


var blink = anime({
    targets: '.eye',
    rotateX: 90,
    easing: 'linear',
    autoplay: false,
    loop: 1,
    direction: 'alternate',
    duration: '100',
});

var happy = anime({
    targets: '.eyelid.lower',
    scale: [
        {value: 1.2, duration: 1, easing: 'easeOutExpo'},
        {value: 1, duration: 1, delay: 3199, easing: 'easeOutExpo'}

    ],
    translateY: [
        {value: -(eye_size*0.35) , duration: 200, easing: 'easeOutSine'},
        {value: 0 , duration: 200, delay: 3000, easing: 'easeOutSine'}
    ],
    autoplay: false
})

var happy_mouth = anime({
    targets: '.smile',
   d:[
    {value: happyPath , duration: 500, easing: 'easeOutExpo'},
    {value: smilePath , duration: 500, easing: 'easeInExpo', delay: 2000}, 
    ],
    autoplay: false,
})

var sad_mouth = anime({
    targets: '.smile',
   d:[
    {value: sadPath , duration: 500, easing: 'easeOutExpo'},
    {value: smilePath , duration: 500, easing: 'easeInExpo', delay: 3000}, 
    ],
    autoplay: false,
})

var sad_eyeL = anime(
    {
    targets: '.eye.left',
    autoplay: false,
    easing: "easeOutExpo",
    rotateZ: [
        {value: -30, duration: 500},
        {value: 0, delay: 3000,duration: 500} 
    ],
    translateY: [
        {value: (eye_size*0.1), duration: 500},
        {value: 0, delay: 3000,duration: 500} 
    ]
})

var sad_eyeR = anime(
    {
    targets: '.eye.right',
    autoplay: false,
    easing: "easeOutExpo",
    rotateZ: [
        {value: 30, duration: 500},
        {value: 0, delay: 3000,duration: 500} 
    ],
    translateY: [
        {value: (eye_size*0.1), duration: 500},
        {value: 0, delay: 3000,duration: 500} 
    ]
})

var angy_eyeL = anime(
    {
    targets: '.eye.left .eyelid.upper',
    autoplay: false,
    easing: "easeOutExpo",
    scaleX: [
        {value: 1.5, duration: 500},
        {value: 1, delay: 3000,duration: 500} 
    ],
    translateY: [
        {value: (eye_size*0.2), duration: 500},
        {value: 0, delay: 3000,duration: 500} 
    ],
    rotateZ: [
        {value: 20, duration: 500,},
        {value: 0, delay: 2800,duration: 500} 
    ],

})

var angy_eyeR = anime(
    {
    targets: '.eye.right .eyelid.upper',
    autoplay: false,
    easing: "easeOutExpo",
    scaleX: [
        {value: 1.5, duration: 500},
        {value: 1, delay: 3000,duration: 500} 
    ],
    translateY: [
        {value: (eye_size*0.2), duration: 500},
        {value: 0, delay: 3000,duration: 500} 
    ],
    rotateZ: [
        {value: -20, duration: 500,},
        {value: 0, delay: 2800,duration: 500} 
    ],

})

var bored = anime(
    {
    targets: '.eyelid.upper',
    autoplay: false,
    easing: "easeInOutSine",
    translateY: [
        {value: (eye_size*0.25), duration: 500},
        {value: 0, delay: 3000,duration: 500} 
    ]
})

var bored_eye = anime({
    targets: '.eye',
    autoplay: false,
    easing: "easeInOutSine",
    translateX: [
        {value: (eye_size*0.1), duration: 500},
        {value: 0, delay: 3000,duration: 500} 
    ]
})

function happy_all(){
    happy.restart();
    happy_mouth.restart();
}

function sad_all(){
    sad_eyeL.restart();
    sad_eyeR.restart();
    sad_mouth.restart();
}

function angy_all(){
    angy_eyeL.restart();
    angy_eyeR.restart();
    sad_mouth.restart();
}

function determined(){
    angy_eyeL.restart();
    angy_eyeR.restart();

}

function bored_all(){
    bored.restart();
    bored_eye.restart();
    sad_mouth.restart();
}

document.querySelector('.buttons .blink').onclick = blink.restart; 
document.querySelector('.buttons .happy').onclick = happy_all; 
document.querySelector('.buttons .sad').onclick = sad_all;
document.querySelector('.buttons .angy').onclick = angy_all;
document.querySelector('.buttons .bored').onclick = bored_all;
document.querySelector('.buttons .determined').onclick = determined;