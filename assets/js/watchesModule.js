var coloredWatches = document.getElementsByClassName('coloredWatches');
var colorChangeButton = document.getElementsByClassName('colorChangeButton');

for (var i = 0; i < colorChangeButton.length; i++) {
  colorChangeButton[i].addEventListener('click',(e)=>{
    for (var i = 0; i < coloredWatches.length; i++) {
      coloredWatches[i].style.opacity = '0';
    };
    coloredWatches[e.currentTarget.dataset.colorpick].style.opacity = '1';
    console.log(e.currentTarget.dataset.colorpick);
  })
}


var iterWatch = 0;
setInterval(function () {
  for (var i = 0; i < coloredWatches.length; i++) {
    coloredWatches[i].style.opacity = '0';
  };
  coloredWatches[iterWatch % 5].style.opacity = '1';
  colorChangeBGautoFun();
  iterWatch++;
}, 2000);


// colorChangeBG
var colorChangeBG = document.getElementsByClassName('colorChangeBG');

function colorChangeBGautoFun() {
  for (var i = 0; i < colorChangeBG.length; i++) {
    colorChangeBG[i].style.left = '-3vw';
    colorChangeBG[i].style.top = '-3vw';
  }
  colorChangeBG[iterWatch % 5].style.top = '-2.5vw';
  colorChangeBG[iterWatch % 5].style.left = '-2.5vw';
}
