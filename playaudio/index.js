var boxClass=document.getElementsByClassName('box');
var boxlist=Array.from(boxClass);
var obj={'65':'0','83':'1','68':'2','70':'3','71':'4','72':'5','74':'6','75':'7','76':'8'};
var audio=Array.from(document.getElementsByClassName('myaudio'));
console.log(audio);



document.body.addEventListener('keydown',function(e){
    var keyprecode=e.keyCode;
  //  console.log(typeof());
    if(keyprecode in obj){
    boxClass[Number(obj[keyprecode])].classList.add('press');
    audio[Number(obj[keyprecode])].play();
    setTimeout(function(){ boxClass[Number(obj[keyprecode])].classList.remove('press'); }, 1500);
    }
    
})


document.body.addEventListener('click',function(e){
  var clicked=e.target.dataset['number'];

//  console.log(typeof());
if(clicked>=0 && clicked<=8){
  boxClass[clicked].classList.add('press');
  audio[clicked].play();
  setTimeout(function(){ boxClass[clicked].classList.remove('press'); }, 1500);
}
  
})
