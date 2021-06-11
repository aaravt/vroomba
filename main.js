var canvas =  document.getElementById("canavic")
ctx=canvas.getContext("2d")
carx=10
cary=10


function add() {
    bg=new Image()
    bg.src="tack.jpeg"
    bg.onload=drawbg
    
    car=new Image()
    car.src="f1!!!.png"
    car.src="f1!"
    car.onload=drawcar
}

function drawcar() {
    ctx.drawImage(car,carx,cary,100,100)
}



function drawbg() {
 ctx.drawImage(bg,0,0,canvas.width,canvas.height)   
}

window.addEventListener("keydown" , kd)
function kd(e) {
    keynumber=e.keyCode
    console.log(keynumber)
    if (keynumber==37) {
        console.log("left is pressed")
        left()
    }
    if (keynumber==38) {
        console.log("up is pressed")
        up()
    }
    if (keynumber==39) {
        console.log("right is pressed")
        right()
    }
    if (keynumber==40) {
        console.log("down is pressed")
        down()
    }
}