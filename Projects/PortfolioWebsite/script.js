let cursorBall = document.querySelector(".cursor");
let cursorOutline = document.querySelector(".cursorOutline");
let About = document.getElementById("ABOUT");
let AboutButton = document.getElementById("ABOUT-button");
let Home = document.getElementById("HOME");
let HomeButton = document.getElementById("HOME-button");
let heroImage = document.getElementById("hero-image");
let darkButton = document.getElementById("dark-button");
let Root = document.getElementById("Root");
let currentPage = Home;
let Portfolio = document.getElementById("PORTFOLIO");
let PortfolioButton= document.getElementById("PORTFOLIO-button");
let animationSlides = document.getElementById("tr-1");



let anchorTag = document.querySelectorAll(".link");

function cursorFixed() {
    cursorBall.style.position = "fixed";
    cursorOutline.style.position = "fixed";
}
function cursorAbsolute() {
    cursorBall.style.position = "absolute";
    cursorOutline.style.position = "absolute";
}







// this is function to control About page button 
AboutButton.addEventListener("click", () => {
    animationSlides.classList.remove("hidden");
    cursorAbsolute();
    setTimeout(() => {
        currentPage.classList.add("hidden");
        currentPage = About;
        About.classList.remove("hidden");
    }, 1200);
    setTimeout(function () {
        animationSlides.classList.add("hidden");
    }, 2300);

});

// this is function to control Home page button 
HomeButton.addEventListener("click", () => {
    animationSlides.classList.remove("hidden");
    cursorFixed();
    setTimeout(() => {
        currentPage.classList.add("hidden");
        currentPage = Home;
        Home.classList.remove("hidden");
    }, 1200);
    setTimeout(function () {
        animationSlides.classList.add("hidden");
    }, 2300);

})


// this is function to control Portfolio page button 

PortfolioButton.addEventListener("click",()=>{
    animationSlides.classList.remove("hidden");
    cursorAbsolute();
    setTimeout(() => {
        currentPage.classList.add("hidden");
        currentPage = Portfolio;
        Portfolio.classList.remove("hidden");
    }, 1200);
    setTimeout(function () {
        animationSlides.classList.add("hidden");
    }, 2300);
});


// this is function to control light mode and dark mode buttons
document.addEventListener("DOMContentLoaded", () => {
    darkButton.addEventListener("click", () => {
        if (Root.classList.contains("dark")) {
            Root.classList.remove("dark");
            darkButton.classList.remove("fa-sun");
            darkButton.classList.add("fa-moon");
            darkButton.classList.add("px-5");
        }
        else {
            Root.classList.add("dark");
            darkButton.classList.add("fa-sun");
            darkButton.classList.remove("fa-moon");
            darkButton.classList.remove("px-5");
        }
    })
})

// this function that track's the mouse and move cursorBall and cursorOutline on that place 
document.addEventListener("mousemove", (e) => {
    cursorBall.style.top = e.pageY + "px";
    cursorBall.style.left = e.pageX + "px";

    cursorOutline.style.top = e.pageY + "px";
    cursorOutline.style.left = e.pageX + "px";
    anchorTag.forEach((event) => {
        event.addEventListener("mouseover", () => {
            cursorBall.classList.add("cursor-hover");
            cursorOutline.classList.add("hidden");
        })
        event.addEventListener("mouseout", () => {
            cursorBall.classList.remove("cursor-hover");
            cursorOutline.classList.remove("hidden");
        })
    });
    heroImage.addEventListener("mouseenter",()=>{
        cursorBall.classList.remove("cursor-ball");
        cursorOutline.classList.remove("cursor-outline");
        cursorBall.classList = "hero-image-mouse";
        cursorOutline.classList = "";
    });
    heroImage.addEventListener("mouseout",()=>{
        cursorBall.classList.remove("hero-image-mouse");
        cursorBall.classList.add("cursor-ball");
        cursorOutline.classList.add("cursor-outline");
    });
    
});

// this function is mouse onclick effect 
document.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        cursorOutline.classList.add("cursor-mousedown");

    }
});

//   this function is for mouseup effect 
document.addEventListener("mouseup", () => {
    cursorOutline.classList.remove("cursor-mousedown");
});



