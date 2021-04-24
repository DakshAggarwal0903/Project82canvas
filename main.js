mouseEvent = "empty";
var oldX ,oldY;
var canvas = document.getElementById("myCanvas");
 var ctx=canvas.getContext("2d");
 var color = "blue";
 var width = 1;
 var radius = 12;
canvas.addEventListener("mousedown",msdn);
function msdn(g){
    color = document.getElementById("col").value;
    width = document.getElementById("wid").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup",msdp);
function msdp(q){
    mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave",msdl);
function msdl(b){
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove",msde);
function msde(v){
    x=v.clientX-canvas.offsetLeft;
    y=v.clientY-canvas.offsetTop;
    if(mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Last position of x coordinate: "+oldX+"and the Y coordinate: "+oldY);
        ctx.moveTo(oldX,oldY);
        console.log("New position of x coordinate: "+x+"and the Y coordinate: "+y);
        ctx.lineTo(x,y);
        ctx.arc(x,y,radius,0 ,2 * Math.PI);
        ctx.stroke();
    }
    oldX=x;
    oldY=y;
}
function wipe(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}