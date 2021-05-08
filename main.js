


// gsap.to(".selector", { // selector text, Array, or object
//     x: 100, // any properties (not limited to CSS)
//     backgroundColor: "red", // camelCase
//     duration: 1, // seconds
//     delay: 0.5,
//     ease: "power2.inOut",
//     stagger: 0.1, // stagger start times
//     paused: true, // default is false
//     overwrite: "auto", // default is false
//     repeat: 2, // number of repeats (-1 for infinite)
//     repeatDelay: 1, // seconds between repeats
//     repeatRefresh: true, // invalidates on each repeat
//     yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
//     yoyoEase: true, // or ease like "power2"
//     immediateRender: false,
//     onComplete: myFunc,
//     // other callbacks: 
//     // onStart, onUpdate, onRepeat, onReverseComplete
//     // Each callback has a params property as well
//     // i.e. onUpdateParams (Array)
// });


gsap.from(".header", {
    y: -100,
    duration: 1,
    ease: "power2.in",
    delay: 2,
    opacity: 0
})

gsap.from(".menu__left > li", {
    y: 100,
    delay: 0.5,
    ease: "power2.inOut",
    // display: "none",
    stagger: 0.1,
    opacity: 0

    }

)

gsap.from(".menu__right > li", {
    y: 100,
    delay: 0.5,
    ease: "power2.inOut",
    // display: "none",
    stagger: 0.1,
    opacity: 0

    }

)


gsap.from(".logo", {
    y: -50,
    delay: 2.2,
    ease: "power2.inOut",
    display: "none",
    opacity: 0

})

gsap.to(".overlay__wrapper", {
    delay: 2,
    x: "-100%",
    overflow: "hidden",
    ease: "power2.inOut",
})


gsap.from(".overlay", {
    opacity: 0,
    y: 800,
    delay: 0.5,
    ease: "power2.inOut",
    stagger: 0.3,
    overflow: "hidden",
    opacity: 0

    } 
)

// gsap.set(".courosel", {
//     x: "-100%"
// })

gsap.from(".courosel", {
    delay: 2.2,
    x: 20,
    opacity: 0,
    // x: 0,
    overflow: "hidden",
    ease: "power2.inOut",
    // backgroundImage: "linear-gradient(to bottom, #000000b7 0%, #6e6e6e94 100%), url("./images/sliderImage.jpg") "
});

gsap.from(".menu__courosel > li", {
    delay: 2.6,
    duration: .7,
    y: 20,
    overflow: "hidden",
    stagger: .2,
    ease: "power2.inOut",
    opacity: 0

})


// @keyframes anim1 {
//     from {
//       transform: translateY(-200px);
//       opacity: 0;
//     }
//     to  {
//       transform: translateY(0);
//       opacity: 1;
//     }
// }

// const animationOnScroll = (element) => {

//     gsap.from(`${element}`, {
//             y: -200,
//             opacity:0
//         },
        
        
//     )

// }





// const anim = document.querySelectorAll(".anim");
// // const images = document.querySelectorAll('.anim');

// observer = new IntersectionObserver((entries) => {

//     console.log(entries)
//     entries.forEach(entry => {
//         if(entry.intersectionRatio > 0) {
//             entry.target.style.animation = animationOnScroll(`.${entry.target.classList[1]}`);
//         }
//         else {
//             entry.target.style.animation = 'none';
//         }
//     })

// })

// // observer.observe(anim)
// anim.forEach(element => {
//     observer.observe(element)
// })
