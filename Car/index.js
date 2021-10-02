var r;
var m=0;

function start(run){
  m +=10;
y=setInterval(run,100);

function run(){
if(m==1200){
    clearInterval(y);
    m=0;
}
else{
    m=m+100;
   var target= document.getElementById("x");
    target.style.marginLeft=m+'px';
}
}

        


}

function stop(){
clearInterval(y)


}