let top=document.getElementById("top")
let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
let b3=document.getElementById("b3")
let b4=document.getElementById("b4")

function change_imge(imgsrc){
    top.style.backgroundImage =`url(${imgsrc})`;

}
function change_background_color(){
    top.style.backgroudcolor="white"
    console.log="hi"
}
b1.addEventListener("click",change_background_color)

b2.addEventListener("click",function(){
    change_imge("images/t1.jpg")})


