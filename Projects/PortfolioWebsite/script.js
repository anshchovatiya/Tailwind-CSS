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
let PortfolioButton = document.getElementById("PORTFOLIO-button");
let animationSlides = document.getElementById("tr-1");
let projectCloseButton = document.getElementById("Project-close-button");
let description = document.querySelector(".Description");
let body = document.getElementById("bodyTag");
let mouseToggle = document.querySelector(".fa-toggle-on");


let anchorTag = document.querySelectorAll(".link");


cursorBall.style.position = "absolute";
cursorOutline.style.position = "absolute";



// this is function to control About page button 
AboutButton.addEventListener("click", () => {
    if (currentPage == About) {
        return 0;
    }
    animationSlides.classList.remove("hidden");
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
    if (currentPage == Home) {
        return 0;
    }
    animationSlides.classList.remove("hidden");
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

PortfolioButton.addEventListener("click", () => {
    if (currentPage == Portfolio) {
        return 0;
    }
    animationSlides.classList.remove("hidden");
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
    heroImage.addEventListener("mouseenter", () => {
        cursorBall.classList.remove("cursor-ball");
        cursorOutline.classList.remove("cursor-outline");
        cursorBall.classList = "hero-image-mouse";
        cursorOutline.classList = "";
    });
    heroImage.addEventListener("mouseout", () => {
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



projectCloseButton.addEventListener("click", () => {
    description.classList.add("hidden");
})



let websiteName = document.getElementById("website-name");
let clientName = document.getElementById("client-name");
let languages = document.getElementById("Languages");
let preview = document.getElementById("website-link");
let ProjectImage = document.getElementById("Project-Image");


let portfolioWebsite = document.querySelector(".Portfolio-website ");
let NIKEWebsite = document.querySelector(".NIKE-website ");
let piNetworkWebsite = document.querySelector(".PI-Network-website");
let HomyWebsite = document.querySelector(".Homy-website");
let AplicaWebsite = document.querySelector(".Aplica-website");
let ItServiceWebsite = document.querySelector(".ItService-website");
let gradientGenerator = document.querySelector(".gradient-generator");



portfolioWebsite.addEventListener("click", () => {
    websiteName.innerText = "Portfolio website";
    clientName.innerText = "Skill Code"
    languages.innerText = "html,css,javascript";
    preview.innerText = "Portfolio";
    preview.addEventListener("click", () => {
        open("https://github.com/anshchovatiya/Tailwind-Css/tree/5667cf91ef1ddee2f8f65a83dc15e9cce857d9ed/Projects/PortfolioWebsite");
    });
    ProjectImage.src = "./assets/Portfolio-website-homepage-photo.png";

    description.classList.remove("hidden");
    description.classList.add("flex");
})
NIKEWebsite.addEventListener("click", () => {
    websiteName.innerText = "Nike Website";
    clientName.innerText = "Skill Code"
    languages.innerText = "html,css,javascript";
    preview.innerText = "Nike Home page";
    preview.addEventListener("click", () => {
        open("https://github.com/anshchovatiya/Tailwind-Css/tree/5667cf91ef1ddee2f8f65a83dc15e9cce857d9ed/Projects/Nike%20website%20Tailwind");
    });
    ProjectImage.src = "./assets/nike-website-homepage-photo.png";

    description.classList.remove("hidden");
    description.classList.add("flex");
})
piNetworkWebsite.addEventListener("click", () => {
    websiteName.innerText = "PI Network Website";
    clientName.innerText = "Skill Code"
    languages.innerText = "html,css";
    preview.innerText = "PI Network Landing page";
    preview.addEventListener("click", () => {
        open("https://github.com/anshchovatiya/CSS/tree/17daa48e4e2d3b778a0a1687ab4aa4e0afe47596/Projects/Crypto%20Crrency%20Lading%20page%20project");
    });
    ProjectImage.src = "./assets/Pi-network-heropage-photo.png";

    description.classList.remove("hidden");
    description.classList.add("flex");
})
HomyWebsite.addEventListener("click", () => {
    websiteName.innerText = "Homy website";
    clientName.innerText = "Skill Code"
    languages.innerText = "html,css,sass";
    preview.innerText = "Homy website lading page";
    preview.addEventListener("click", () => {
        open("https://github.com/anshchovatiya/CSS/tree/17daa48e4e2d3b778a0a1687ab4aa4e0afe47596/Projects/Homy_website");
    });
    ProjectImage.src = "./assets/homy-website-heropage-photo.png";

    description.classList.remove("hidden");
    description.classList.add("flex");
})
AplicaWebsite.addEventListener("click", () => {
    websiteName.innerText = "Aplica website";
    clientName.innerText = "Skill Code"
    languages.innerText = "html,css";
    preview.innerText = "Aplica website lading page";
    preview.addEventListener("click", () => {
        open("https://github.com/anshchovatiya/CSS/tree/17daa48e4e2d3b778a0a1687ab4aa4e0afe47596/Projects/Aplica_Website_Project");
    });
    ProjectImage.src = "./assets/Aplica-website-homepage-photo.png";

    description.classList.remove("hidden");
    description.classList.add("flex");
})
HomyWebsite.addEventListener("click", () => {
    websiteName.innerText = "Homy website";
    clientName.innerText = "Skill Code"
    languages.innerText = "html,css,sass";
    preview.innerText = "Homy website lading page";
    preview.addEventListener("click", () => {
        open("https://github.com/anshchovatiya/CSS/tree/17daa48e4e2d3b778a0a1687ab4aa4e0afe47596/Projects/Homy_website");
    });
    ProjectImage.src = "./assets/homy-website-heropage-photo.png";

    description.classList.remove("hidden");
    description.classList.add("flex");
})
ItServiceWebsite.addEventListener("click", () => {
    websiteName.innerText = "AcItServices";
    clientName.innerText = "Skill Code"
    languages.innerText = "html,css";
    preview.innerText = "It Services landing page";
    preview.addEventListener("click", () => {
        open("https://github.com/anshchovatiya/CSS/tree/d22bd695ccad6a904c20ca10eda6796e258a8c9f/Projects/It%20servie%20page%20project");
    });
    ProjectImage.src = "./assets/Itservice-website-homepage-photo.png";

    description.classList.remove("hidden");
    description.classList.add("flex");
})
gradientGenerator.addEventListener("click", () => {
    websiteName.innerText = "Random Gradient Generator";
    clientName.innerText = "Skill Code"
    languages.innerText = "html,css,Javascript";
    preview.innerText = "Gradient Generator Page";
    preview.addEventListener("click", () => {
        open("https://github.com/anshchovatiya/Javascript/tree/a633cdad48cffb284f919557d115019792b04a49/Projects/gredientGenerator");
    });
    ProjectImage.src = "./assets/Portfolio-website-homepage-photo.png";

    description.classList.remove("hidden");
    description.classList.add("flex");
})

let MenuButton = document.getElementById("MenuButton");
let MenuBar = document.getElementById("MenuBar");

MenuButton.addEventListener("click",()=>{
    if(MenuBar.classList.contains("hidden")){
        MenuBar.classList.remove("hidden");
        MenuBar.classList.style.left = "20px";
    }
    else{
        MenuBar.classList.add("hidden");
    }
});


