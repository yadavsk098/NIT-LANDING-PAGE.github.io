
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        loop: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Get the heading and paragraph elements by their IDs
const empoweringText = document.getElementById('empowering-text');
const empoweringParagraph = document.getElementById('empowering-paragraph');

// Continuous highlighting effect for the h1 text
setInterval(function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    empoweringText.style.color = randomColor;
}, 1000); // Changes color every second (1000 milliseconds)

// Continuous animation for the paragraph
empoweringParagraph.style.animation = 'pulse 1s infinite';

// CSS for the animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`);
