const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



let lastX =0;
let hexValue = 0;
let lastY =0;
let isDrawing = false;
let direction =true ;


if(hexValue <= 360 ){
    direction;
}else{
    !direction;
}

function draw(e){
    if(isDrawing){
        console.log(hexValue);
       ctx.beginPath();
       ctx.strokeStyle= `hsl(${hexValue},100%,50%)`;
       
       
       ctx.moveTo(lastX,lastY);
      
       ctx.lineTo(e.offsetX,e.offsetY);
       console.log(hexValue);
       ctx.stroke();
       ctx.lineWidth = 10;
       ctx.lineCap = "round";
       ctx.lineJoin = "round"
       hexValue = (hexValue+1) % 360;
       console.log(hexValue)

    }
    [lastX,lastY] = [e.offsetX,e.offsetY];

}

canvas.addEventListener("mousedown",(e)=>{
    isDrawing= true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
   
})

canvas.addEventListener("mousemove",draw)

canvas.addEventListener("mouseup",()=>{isDrawing=false})

canvas.addEventListener("mouseout",()=>{isDrawing=false})

// canvas.addEventListener("mouseenter",(e)=>{
//     [lastX,lastY] = [e.offsetX,e.offsetY];
// })


