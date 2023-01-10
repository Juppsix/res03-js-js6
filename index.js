function exercice6()
{
let  canvasDom  =  document.getElementById('ex1');
let  ctx  =  canvasDom.getContext('2d');

ctx.fillStyle  =  "#FF0000";
ctx.fillRect(120, 100, 200, 150);

}

function exercice5()
{
let circle = {
    color: "#3498DB",
    radius:100,
    x:225,
    y:160
};
let canvasDom = document.getElementById('ex2');
let ctx = canvasDom.getContext('2d');

ctx.fillStyle ='#ffffff';
ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);

ctx.fillStyle = circle.color;
ctx.beginPath(); 
ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
ctx.fill(); 
let degres = 42;

let radians = degres * Math.PI / 180;


}

function exercice4()
{
let canvasDom = document.getElementById('ex3');
let ctx = canvasDom.getContext('2d');

ctx.font = 'bold 68px Montserrat';
ctx.fillStyle ='#17202A';

ctx.fillText('Geometry.io', 10, 160);

}

function exercice3()
{
let circle = {
    color: "#3498DB",
    radius:100,
    x:225,
    y:160
};    
let canvasDom = document.getElementById('ex4');
let ctx = canvasDom.getContext('2d');

ctx.fillStyle ='#ffffff';
ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);

ctx.fillStyle = circle.color;
ctx.beginPath(); 
ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
ctx.fill(); 
let degres = 42;

let radians = degres * Math.PI / 180;
let intervalId = setInterval(function(){
    
  
});
}

function exercice2()
{

}

function exercice1()
{

}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});