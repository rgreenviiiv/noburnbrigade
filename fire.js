function safeAnswer(){
let random = ''
  let notSafeAnswer = function(){

  }
  let hintAnswer = function(){

  }
  return random;
}

// fbcon = document.querySelector('.fbCon');
// fbcon.addEventListener('click',function(){
//   fbcon.style.color = 'red';
// });

let pic = 0;
let fireImages = [];
let time = 3000;

fireImages[0] = 'images/exit.gif';
// fireImages[1] = 'images/fireimage1.jpg';
// fireImages[2] = 'images/fireimage2.jpg';
fireImages[1] = 'images/fireimage3.jpg';
fireImages[2] = 'images/fireimage4.jpg';
fireImages[3] = 'images/fireimage5.png';
console.log(document.hotpics)
document.hotpics.src = fireImages[pic];
function changeImg() {
  // console.log(document.hotpics)
  document.hotpics.src = fireImages[pic];
  // if (pic < fireImages.length -1) {
  //   pic++
  // } else{
  //   pic = 0
  // }
  pic = (pic + 1) % fireImages.length;
}

setInterval(changeImg, time);


// let gotdamnImg = document.querySelector('#insertImg');
// gotdamnImg.addEventListener('load',changeImg())
window.onload = changeImg;
console.log(fireImages);
// console.log(Document.images)
// for(let i = 0; i < ){
//
// }

// let insert = document.getElementById('insertImg').innerHTMl = "<img name='hotpics' width="600" height="400"/>";
