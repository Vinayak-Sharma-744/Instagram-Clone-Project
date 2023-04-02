const profile = document.getElementById("PP")
let menu = document.getElementById("menu")

profile.addEventListener('click', fun)

function fun(){
    if (menu.style.display === "" || menu.style.display ==="none") {
        menu.style.display = "block"
        console.log("check1")
    } 
    else {
        menu.style.display = "none"
        console.log("check2")
    }
}