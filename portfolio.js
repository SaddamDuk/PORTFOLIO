let imgPortfolio = document.querySelector(".aboutMe img")
let aboutMe = document.querySelector(".aboutMe")
let getLandFr = document.querySelectorAll(".languageAndFr>div")
let skilss = document.querySelector(".skilss")
let hiMessage = document.querySelectorAll(".hiMessage>div")
let contactMe = document.querySelector(".contactMe")
let rocket = document.querySelector(".rocket")
window.addEventListener("scroll", (a) => {
    console.log();
    hiMessage[0].style.marginRight = `${window.pageYOffset}px`
    hiMessage[1].style.marginLeft = `${window.pageYOffset}px`
    hiMessage[2].style.marginRight = `${window.pageYOffset}px`
    if (window.pageYOffset > 666) {
        aboutMe.style.opacity = "0"
    } else {
        aboutMe.style.opacity = "1"
    }
    if (window.pageYOffset > 1066) {
        skilss.style.opacity = "0"
    } else {
        skilss.style.opacity = "1"
    }
    if (window.pageYOffset > 50) {
        imgPortfolio.style.animationName = "opacityA"
        aboutMe.style.animationName = "filterA"
        aboutMe.classList.remove("border")
        aboutMe.style.backgroundColor = "#EEE"

    }
    else {
        imgPortfolio.style.animationName = ""
        aboutMe.style.animationName = ""
        aboutMe.classList.add("border")

    }

    if (window.pageYOffset > 450) {
        skilss.style.backgroundColor = "#EEE"
        getLandFr.forEach((e) => {
            let percentage = e.children[2].children[0];
            e.children[1].innerHTML = `${percentage.getAttribute("data-percentage")}%`
            percentage.style.width = `${percentage.getAttribute("data-percentage")}%`
        })
        skilss.style.animationName = "filterA"
    } else {
        skilss.style.backgroundColor = "#000"
        skilss.style.animationName = ""
        getLandFr.forEach((e) => {
            let percentage = e.children[2].children[0];
            e.children[1].innerHTML = ""
            percentage.style.width = "0px"
        })

    }
    if (window.pageYOffset > 900) {
        // contactMe.style.backgroundColor = "#EEE"
        contactMe.style.animationName = "filterA"
    } else {
        // contactMe.style.backgroundColor = "#000"
        contactMe.style.animationName = ""
    }
}
)
function hi() {
    hiMessage[0].classList.add("opacity")
}
function saddam() {
    hiMessage[1].classList.add("opacity")
}
function duk() {
    hiMessage[2].classList.add("opacity")
}
function off() {
    hiMessage.forEach((e) => {
        e.classList.remove("opacity")
    })
}
function on() {
    hiMessage.forEach((e) => {
        e.classList.add("opacity")
        e.classList.add("shadow")
    })
}
setTimeout(hi, 500)
setTimeout(saddam, 1000)
setTimeout(duk, 1500)
setTimeout(off, 2000)
setTimeout(on, 2500)

setTimeout(() => {
    rocket.style.left = `2000px`
    console.log("saddam");
}, 1000);