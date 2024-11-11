const crsr = document.querySelector(".cursor")
const main = document.querySelector(".main")

main.addEventListener("mousemove", (dets)=>{
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})