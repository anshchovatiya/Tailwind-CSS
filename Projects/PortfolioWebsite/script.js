const cursor = document.querySelector(".cursor");
const cursorOuter = document.querySelector(".cursor-outer");


// let container follow the cursor on the browser 

document.addEventListener('mousemove',(event)=>{
    cursor.style.display = "block";
    let x = event.pageX;
    let y = event.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursorOuter.style.top = y + "px";
    cursorOuter.style.left = x + "px";
})

// document.body.addEventListener('mouseout',()=>{
//    cursor.style.display = "none";
// })



let About = document.getElementById("ABOUT");
let AboutButton = document.getElementById("ABOUT-button");
let Home = document.getElementById("HOME");
let HomeButton = document.getElementById("HOME-button");



AboutButton.addEventListener("click",()=>{
    Home.classList.add("hidden");
    About.classList.remove("hidden");
})

HomeButton.addEventListener("click",()=>{
    About.classList.add("hidden");
    Home.classList.remove("hidden");
})



