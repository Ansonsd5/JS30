const canvas = document.getElementById("canvas");

let lastX =0;

let lastY =0;
let isDrawing = false;

function drawing(){
    if(isDrawing){
        console.log("drawing");
    }
}

canvas.addEventListener("mousedown",(e)=>{
    isDrawing= true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
   
})

canvas.addEventListener("mousemove",drawing)

canvas.addEventListener("mouseup",()=>{isDrawing=false})

canvas.addEventListener("mouseout",()=>{isDrawing=false})


