const startBtn = document.querySelector('#start');
const StopBtn =document.querySelector('#stop');
const headEl = document.querySelector('#head');


let intervalId;
function randomColor(){
    let hex = "0123456789ABCDEF";
    let color = '#'
    for( let i=0; i<6 ; i++){
      color += hex[Math.floor(Math.random()*16)]
    }
return color ;

}
const startChangingColor = ()=>{

intervalId = setInterval(changebgColor,2000)
    function changebgColor (){
        document.body.style.backgroundColor = randomColor();
    }

}
startBtn.addEventListener('click',startChangingColor);

const stopChagingColor =()=>{
    clearInterval(intervalId);
    intervalId=null;
}
StopBtn.addEventListener('click',stopChagingColor)