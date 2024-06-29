let cursorBall = document.querySelector(".cursor");
let cursorOutline = document.querySelector(".cursorOutline");
let About = document.getElementById("ABOUT");
let Home = document.getElementById("HOME");
let heroImage = document.getElementById("hero-image");

let Root = document.getElementById("Root");
let currentPage = Home;
let Portfolio = document.getElementById("PORTFOLIO");

let animationSlides = document.getElementById("tr-1");
let description = document.querySelector(".Description");
let body = document.getElementById("bodyTag");
let mouseToggle = document.querySelector(".fa-toggle-on");
let Contact = document.getElementById("CONTACT");
let Blog = document.getElementById("BLOG")


let anchorTag = document.querySelectorAll(".link");


cursorBall.style.position = "absolute";
cursorOutline.style.position = "absolute";



// this is function to control About page button 
document.querySelectorAll(".ABOUT-button").forEach((event) => {
    event.addEventListener("click", () => {
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
})


// this is function to control Home page button 
document.querySelectorAll(".HOME-button").forEach((event) => {
    event.addEventListener("click", () => {
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

    });
});


// this is function to control Portfolio page button 
document.querySelectorAll(".PORTFOLIO-button").forEach((event) => {
    event.addEventListener("click", () => {
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
})

// this is function to control contact page button 
document.querySelectorAll(".CONTACT-button").forEach((event) => {
    event.addEventListener("click", () => {
        if (currentPage == Contact) {
            return 0;
        }
        animationSlides.classList.remove("hidden");
        setTimeout(() => {
            currentPage.classList.add("hidden");
            currentPage = Contact;
            Contact.classList.remove("hidden");
        }, 1200);
        setTimeout(function () {
            animationSlides.classList.add("hidden");
        }, 2300);
    });
})

// this is function to control Blog page button 
document.querySelectorAll(".BLOG-button").forEach((event) => {
    event.addEventListener("click", () => {
        if (currentPage == Blog) {
            return 0;
        }
        animationSlides.classList.remove("hidden");
        setTimeout(() => {
            currentPage.classList.add("hidden");
            currentPage = Blog;
            Blog.classList.remove("hidden");
        }, 1200);
        setTimeout(function () {
            animationSlides.classList.add("hidden");
        }, 2300);
    });
})



// this is function to control light mode and dark mode buttons
document.addEventListener("DOMContentLoaded", () => {
    let darkButton = document.getElementById("dark-button");
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

});

document.body.addEventListener("mouseover",()=>{
    cursorBall.classList.remove("hidden");
    cursorOutline.classList.remove("hidden");
});

document.body.addEventListener("mouseout",()=>{
    cursorBall.classList.add("hidden");
    cursorOutline.classList.add("hidden");
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



document.getElementById("Project-close-button").addEventListener("click", () => {
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
    ProjectImage.src = "./assets/random-gradeint-generator.png";

    description.classList.remove("hidden");
    description.classList.add("flex");
})

let MenuButton = document.getElementById("MenuButton");
let MenuBar = document.getElementById("Menu");
let MenuClose = document.querySelector(".Menu-Close");

MenuButton.addEventListener("click", () => {
    MenuBar.classList.add("flex");
    MenuBar.classList.remove("hidden");
    setTimeout(() => {
        MenuButton.classList.add("hidden");
    }, 200);
});

MenuClose.addEventListener("click", () => {
    MenuButton.classList.remove("hidden");
    MenuBar.classList.remove("hidden");
    MenuBar.classList.add("hidden");

});



let blogGridOne = document.getElementById("NumberOne");
let blogGridTwo = document.getElementById("NumberTwo");
let blogButtonOne = document.getElementById("blog-button-one");
let blogButtonTwo = document.getElementById("blog-button-two");



blogButtonOne.addEventListener("click", () => {
    if (blogGridOne.classList.contains("hidden")) {
        blogGridOne.classList.remove("hidden");
        blogGridOne.classList.add("grid");
        blogGridTwo.classList.add("hidden");
        blogGridTwo.classList.remove("grid");

        blogButtonOne.style.backgroundColor = "#FFB400";

        blogButtonTwo.style.backgroundColor = "#0000ff25"

    }
    else {
        return 0;
    }
})
blogButtonTwo.addEventListener("click", () => {
    if (blogGridTwo.classList.contains("hidden")) {
        blogGridTwo.classList.remove("hidden");
        blogGridTwo.classList.add("grid");
        blogGridOne.classList.add("hidden");
        blogGridOne.classList.remove("grid");
        blogButtonTwo.style.backgroundColor = "#FFB400";

        blogButtonOne.style.backgroundColor = "#0000ff25"


    }
    else {
        return 0;
    }
})

let blogDescriptionPage = document.getElementById("Blog-Description");


document.querySelector(".blog-card-1").addEventListener("click", () => {
    animationSlides.classList.remove("hidden");
    document.querySelector(".Blog-Writer-name").innerText = "Amir";
    document.querySelector(".Blog-date").innerText = "09 September 2018";
    document.querySelector(".Blog-text").innerText = "Programming,books,study";
    document.querySelector(".blog-image").src = "./assets/blog-post-1.jpg";
    document.querySelector(".blog-tittle").innerText = "How To Own Your Audience By Creating An Email List";

    setTimeout(() => {
        currentPage.classList.add("hidden");
        currentPage = Portfolio;
        blogDescriptionPage.classList.remove("hidden");
    }, 1200);
    setTimeout(function () {
        animationSlides.classList.add("hidden");
    }, 2300);
});

document.querySelector(".blog-card-2").addEventListener("click", () => {
    animationSlides.classList.remove("hidden");
    document.querySelector(".Blog-Writer-name").innerText = "Stiffen";
    document.querySelector(".Blog-date").innerText = "25 May 2020";
    document.querySelector(".Blog-text").innerText = "Programming,reading,nature";
    document.querySelector(".blog-image").src = "./assets/blog-post-2.jpg";
    document.querySelector(".blog-tittle").innerText = "Top 10 Tool-kits For Deep Learning In 2020";

    setTimeout(() => {
        currentPage.classList.add("hidden");
        currentPage = Portfolio;
        blogDescriptionPage.classList.remove("hidden");
    }, 1200);
    setTimeout(function () {
        animationSlides.classList.add("hidden");
    }, 2300);
});

document.querySelector(".blog-card-3").addEventListener("click", () => {
    animationSlides.classList.remove("hidden");
    document.querySelector(".Blog-Writer-name").innerText = "Robert";
    document.querySelector(".Blog-date").innerText = "14 April 2021";
    document.querySelector(".Blog-text").innerText = "Programming,web-development,coding";
    document.querySelector(".blog-image").src = "./assets/blog-post-3.jpg";
    document.querySelector(".blog-tittle").innerText = "Everything You Need to Know About Web Accessibility";

    setTimeout(() => {
        currentPage.classList.add("hidden");
        currentPage = Portfolio;
        blogDescriptionPage.classList.remove("hidden");
    }, 1200);
    setTimeout(function () {
        animationSlides.classList.add("hidden");
    }, 2300);
});
document.querySelector(".blog-card-4").addEventListener("click", () => {
    animationSlides.classList.remove("hidden");
    document.querySelector(".Blog-Writer-name").innerText = "Amrit";
    document.querySelector(".Blog-date").innerText = "4 july 2015";
    document.querySelector(".Blog-text").innerText = "life,health,humour,laugh";
    document.querySelector(".blog-image").src = "./assets/blog-post-4.jpg";
    document.querySelector(".blog-tittle").innerText = "How To Inject Humor & Comedy Into Your Brand";

    setTimeout(() => {
        currentPage.classList.add("hidden");
        currentPage = Portfolio;
        blogDescriptionPage.classList.remove("hidden");
    }, 1200);
    setTimeout(function () {
        animationSlides.classList.add("hidden");
    }, 2300);
});
document.querySelector(".blog-card-5").addEventListener("click", () => {
    animationSlides.classList.remove("hidden");
    document.querySelector(".Blog-Writer-name").innerText = "Chris";
    document.querySelector(".Blog-date").innerText = "25 june 2018";
    document.querySelector(".Blog-text").innerText = "web-design,woman-empowerment,designing";
    document.querySelector(".blog-image").src = "./assets/blog-post-5.jpg";
    document.querySelector(".blog-tittle").innerText = "Women In Web Design: How To Achieve Success";

    setTimeout(() => {
        currentPage.classList.add("hidden");
        currentPage = Portfolio;
        blogDescriptionPage.classList.remove("hidden");
    }, 1200);
    setTimeout(function () {
        animationSlides.classList.add("hidden");
    }, 2300);
});
document.querySelector(".blog-card-6").addEventListener("click", () => {
    animationSlides.classList.remove("hidden");
    document.querySelector(".Blog-Writer-name").innerText = "Albert";
    document.querySelector(".Blog-date").innerText = "1 November 2024";
    document.querySelector(".Blog-text").innerText = "happy-life,traveling,beach";
    document.querySelector(".blog-image").src = "./assets/blog-post-6.jpg";
    document.querySelector(".blog-tittle").innerText = "Evergreen Versus Topical Content: An Overview";

    setTimeout(() => {
        currentPage.classList.add("hidden");
        currentPage = Portfolio;
        blogDescriptionPage.classList.remove("hidden");
    }, 1200);
    setTimeout(function () {
        animationSlides.classList.add("hidden");
    }, 2300);
});