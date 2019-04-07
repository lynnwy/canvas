var hash={
  "0":"blue",
  "1":"green",
  "2":"red",
  "3":"grey",
  "length":"4"

}

var yyy=document.getElementById('xxx')

autoSetCanvasSize(yyy)
var ctx = yyy.getContext('2d');
function clickColor(){}

listenToMouse(yyy)


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



//获取页面宽高
function autoSetCanvasSize(canvas){
  getPageWH()
  window.onresize=getPageWH()
  function getPageWH(){
    var pageWidth=document.documentElement.clientWidth
    var pageHeight=document.documentElement.clientHeight
    canvas.width=pageWidth
    canvas.height=pageHeight
    
  }
  
}




//特性检测
function listenToMouse(canvas){
  var clickon =false
  var lastpoint={x:undefined,y:undefined}
  if( document.body.ontouchstart!==undefined ){
    //触屏设备

    canvas.ontouchstart=function(aaa){
      console.log(aaa)
      var x=aaa.touches[0].clientX
      var y=aaa.touches[0].clientY
      clickon=true
      if(usingEraser){
        
        lastPoint={
          "x":x,
          "y":y
        }
        ctx.clearRect(x,y,10,10)
      }else if(usingPen) {
        
        lastPoint={
          "x":x,
          "y":y
        }
      }
      
    }
    canvas.ontouchmove=function(aaa){
     console.log('边摸变动')
     var x=aaa.touches[0].clientX
     var y=aaa.touches[0].clientY
      
      if(usingEraser){
        if(clickon){
         var newPoint={x:x,y:y}
       ctx.clearRect(x-5,y-5,10,10)
       lastPoint=newPoint
      }}
      else{
       if(clickon){ 
         var newPoint={x:x,y:y}
         drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
         
         lastPoint=newPoint
      }
   }}
   canvas.ontouchend=function(){
     console.log('摸完了')
   }

  }else{
    //非触屏设备
    canvas.onmousedown= function(aaa){
      var x=aaa.clientX
      var y=aaa.clientY
      clickon=true
      if(usingEraser){
        
        lastPoint={
          "x":x,
          "y":y
        }
        ctx.clearRect(x,y,10,10)
      }else if(usingPen) {
        
        lastPoint={
          "x":x,
          "y":y
        }
      }
    }
    
    canvas.onmousemove=function(aaa){
      var x=aaa.clientX
      var y=aaa.clientY
       
       if(usingEraser){
         if(clickon){
          var newPoint={x:x,y:y}
        ctx.clearRect(x-5,y-5,10,10)
        lastPoint=newPoint
       }}
       else{
        if(clickon){ 
          var newPoint={x:x,y:y}
          drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
          
          lastPoint=newPoint
       }}
  
  
       canvas.onmouseup=function(aaa){
        clickon=false 
      }

  }
   
  } 
  
}

var usingEraser = false
eraser.onclick = function(){
  usingEraser = true
  usingPen=false
}

var usingPen = false
pen.onclick = function(){
  usingPen = true
  usingEraser= false

}



blue.onclick=function(){
  
  ctx.fillStyle=hash["0"]
  ctx.strokeStyle=hash["0"]
  
}
green.onclick=function(){
 
  ctx.fillStyle=hash["1"]
  ctx.strokeStyle=hash["1"]
 
}
red.onclick=function(){
  
  ctx.fillStyle=hash["2"]
  ctx.strokeStyle=hash["2"]
  
}
grey.onclick=function(){

  ctx.fillStyle=hash["3"]
  ctx.strokeStyle=hash["3"]
 
}











