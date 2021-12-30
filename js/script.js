const scrollbtn = document.getElementById("scroll-to-top");

scrollbtn.addEventListener("click", ()=>{
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

window.addEventListener("scroll", ()=> {
    if(window.scrollY >= 700){
        scrollbtn.style.opacity = 1;
    }
    else {
        scrollbtn.style.opacity = 0;
    }
})

const label = document.getElementById("label");
const ball = document.querySelector(".ball");
const darkmode = localStorage.getItem("dark");

if(darkmode){
    document.querySelector("body").classList.add("dark");
    label.style.background = "black";
    ball.style.background = "white";
    ball.style.transform = "translateX(30px)";
}
else{
    document.querySelector("body").classList.remove("dark");
}

label.addEventListener("click", () => {
    if(label.style.background == "white"){
        label.style.background = "black";
        ball.style.background = "white";
        ball.style.transform = "translateX(30px)";
        document.querySelector("body").classList.add("dark");
        localStorage.setItem("dark", "active");
    }
    else {
        label.style.background = "white";
        ball.style.background = "black";
        ball.style.transform = "translateX(0)";
        document.querySelector("body").classList.remove("dark");
        localStorage.removeItem("dark")
    }
})

