const bgColors = ["#d8760e","#65c45d","#5d88c4","#c45dc4"]

const customMenu = document.querySelector(".custom-menu")
const custormMenuBtns = [...document.querySelectorAll(".custom-menu button")]

document.addEventListener("contextmenu", toggleCustomMenu)
document.addEventListener("click", toggleCustomMenu)

function toggleCustomMenu(e) {
    if(e.type === "contextmenu") {
        e.preventDefault()
    
        customMenu.style.display = "block"
        customMenu.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    } else if(e.type === "click") {
        customMenu.style.display = "none"
    }
}

custormMenuBtns.forEach(btn => btn.addEventListener("click", changeBgColor))

function changeBgColor(e){
    const btnIndex = custormMenuBtns.indexOf(e.target)
    document.body.style.backgroundColor = bgColors[btnIndex]
}