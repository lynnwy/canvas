

var yyy=document.getElementById('xxx')
var ctx = yyy.getContext('2d');
ctx.fillStyle='lightblue'
ctx.strokeStyle='lightblue'



//画矩形
/*ctx.strokeRect(10,10,100,100);//描边
ctx.fillRect(10,10,100,100)//填充
ctx.clearRect(50,50,10,10)//橡皮擦
*/

//画三角形
/*ctx.beginPath();//我要开始画了
ctx.moveTo(240,240);
ctx.lineTo(300,240)
ctx.lineTo(300,300)
ctx.fill()*/

var painting =false
var lastpoint={x:undefined,y:undefined}

yyy.onmousedown=function(aaa){
  painting=true
  var x=aaa.clientX
  var y=aaa.clientY
  lastPoint={x:x,y:y}
  drawCircle(x,y,1)
}

yyy.onmousemove=function(aaa){
   if(painting){
   var x=aaa.clientX
   var y=aaa.clientY
   var newPoint={x:x,y:y}
   drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
   drawCircle(x,y,1)
   lastPoint=newPoint
   }
}

yyy.onmouseup=function(aaa){
  painting=false
  
}


//画线
function drawLine(x1,y1,x2,y2){

     ctx.beginPath()
     ctx.moveTo(x1,y1)
     ctx.lineTo(x2,y2)
     ctx.lineWidth=5
     ctx.stroke()
     ctx.closePath()
}


//画圆
function drawCircle(x,y,radius){
  var ctx = yyy.getContext('2d')
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2)
  ctx.fill()
  
}








