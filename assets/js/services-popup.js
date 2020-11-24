var contactUsButton = document.getElementsByClassName('contactUsButton');
var contactUsContainer = document.getElementsByClassName('contactUsContainer');
var contcactUsContainerID = document.getElementById('contcactUsContainerID');
var popupSideMenuContainer = document.getElementsByClassName('popupSideMenuContainer');
var popupSideMenuItem = document.getElementsByClassName('popupSideMenuItem');

var contactUsToogle = 1;
function toogleContact() {
  if(contactUsToogle){
    contcactUsContainerID.className = 'contactUsContainer contactUsContainerShow';
    popupSideMenuContainer[0].style.background = '#b088e5'
    popupSideMenuItem[0].style.opacity = '0'
    contactUsToogle = 0;
  }else{
    contcactUsContainerID.className = 'contactUsContainer contactUsContainerHide'
    popupSideMenuContainer[0].style.background = 'transparent'
    popupSideMenuItem[0].style.opacity = '1'
    contactUsToogle = 1;
  }
}

contactUsButton[0].addEventListener('click',toogleContact);



// swipeCar what we do
// swipeCar what we do
// swipeCar what we do
var rectWorkImageBox = document.getElementsByClassName('cmsContainer')
var imAdot = document.getElementsByClassName('imAdot');
rectWorkImageBox[0].addEventListener('touchstart', dragStart);
rectWorkImageBox[0].addEventListener('touchmove', dragMove);
rectWorkImageBox[0].addEventListener('touchend', endPositon);

// rectWorkImageBox position
var rectWorkImageBoxPosition = 0;
var recentWorkStage = 0;
var curentMousePos = 0;
var startPos;

function dragStart(e) {
  startPos = e.touches[0].clientX +(recentWorkStage*window.innerWidth);
    // stop transition
  rectWorkImageBox[0].style.transition = '0s';
}

function dragMove(e) {
  rectWorkImageBox[0].style.left = e.touches[0].clientX - startPos + 'px';
}
dotslideChange()


function endPositon(e) {


  rectWorkImageBox[0].style.transition = '.5s ease-in';
    // position logic
    if(rectWorkImageBox[0].style.left =='-300%'||rectWorkImageBox[0].style.left=="-100%"||rectWorkImageBox[0].style.left== "-200%"||rectWorkImageBox[0].style.left =='0%'){

    }else{
      dotslideChange()

  if(e.changedTouches[0].clientX < window.innerWidth/2 && recentWorkStage < 1){
    rectWorkImageBoxPosition -=100;
    recentWorkStage+=1;

  }else if(e.changedTouches[0].clientX > window.innerWidth/2 && recentWorkStage > 0){
    rectWorkImageBoxPosition +=100;
    recentWorkStage-=1;

  }
  rectWorkImageBox[0].style.left = rectWorkImageBoxPosition + '%';
    }

  dotColorChange()
  // console.log(recentWorkStage);
}

// dot colors change
function dotColorChange() {
  dotslideChange()

  for (var i = 0; i < imAdot.length; i++) {
    imAdot[i].style.background = 'transparent';

  }
  dotslideChange()
  imAdot[recentWorkStage].style.background = '#fff';
}
function dotslideChange(){
  let imAdots = Array.from(imAdot);



  imAdots.forEach(eachDots => {

    let slidesImg = Array.from(document.querySelectorAll(".cmsContainer .procBox"))

    eachDots.addEventListener("click",function(){
      //Change Slides
      getCurrentIndex= imAdots.indexOf(this);
      selectedSlidesImg = slidesImg[getCurrentIndex]
      rectWorkImageBox[0].style.left = (getCurrentIndex*-1 + '00%');

    (getCurrentIndex==0?rectWorkImageBoxPosition=0:
      rectWorkImageBoxPosition = (getCurrentIndex*-100))
      console.log(slidesImg.indexOf(selectedSlidesImg)==0);
    if(slidesImg.indexOf(selectedSlidesImg)==0){
      recentWorkStage=0
    }else{
      recentWorkStage = slidesImg.indexOf(selectedSlidesImg)
    }

    this.style.background="rgb(166, 166, 166)"
    const filteredItemsImg = imAdots.filter((value, index) => getCurrentIndex !== index);
    filteredItemsImg.forEach(dot=>{
      dot.style.background="transparent"
    })

    });


    return rectWorkImageBoxPosition,recentWorkStage;

  });



}
dotslideChange()


// whatWeDo Section carousel mobile
var fourImgGrid = document.querySelector('.promiseGrid');
var servicesDot = document.getElementsByClassName('servicesDot');

fourImgGrid.addEventListener('touchstart', dragStartServices);
fourImgGrid.addEventListener('touchmove', dragMoveServices);
fourImgGrid.addEventListener('touchend', endPositonServices);

var servicesWorkImageBoxPosition = 0;
var servicesWorkStage = 0;
var curentMousePosServices = 0;
var startPosServices;

function dragStartServices(e) {
  if(fourImgGrid.style.left =='-300%'||fourImgGrid.style.left=="-100%"||fourImgGrid.style.left== "-200%"||fourImgGrid.style.left== "0%"){

  }else{
  startPosServices = e.touches[0].clientX +(servicesWorkStage*window.innerWidth);
    // stop transition
  fourImgGrid.style.transition = '0s';
  }
}

function dragMoveServices(e) {
  fourImgGrid.style.left = e.touches[0].clientX - startPosServices + 'px';
}

function endPositonServices(e) {
  fourImgGrid.style.transition = '.5s ease-in';
    // position logic
console.log(fourImgGrid.style.left);
if(fourImgGrid.style.left =='-300%'||fourImgGrid.style.left=="-100%"||fourImgGrid.style.left== "-200%"||fourImgGrid.style.left== "0%"){

}else{
  dotsChangeServices()
  if(e.changedTouches[0].clientX < window.innerWidth/3 && servicesWorkStage < 5){
    servicesWorkImageBoxPosition -=100;
    servicesWorkStage+=1;
  }else if(e.changedTouches[0].clientX > window.innerWidth/2 && servicesWorkStage > 0){
    servicesWorkImageBoxPosition +=100;
    servicesWorkStage-=1;
  }

}
  fourImgGrid.style.left = servicesWorkImageBoxPosition + '%';

  dotColorChangeServices()
}

function dotColorChangeServices() {
  for (var i = 0; i < servicesDot.length-1; i++) {
    servicesDot[i].style.background = 'transparent';
  }
  servicesDot[servicesWorkStage].style.background = 'white';
}



function dotsChangeServices(){
  let selectDots = document.querySelectorAll('.servicesDotsContainer .servicesDot ')
  let imAdots = Array.from(selectDots);
  let slidesImg = Array.from(document.querySelectorAll(".promiseContainer .promiseGridBox"))

  imAdots.forEach(eachDots => {

    eachDots.addEventListener("click",function(){
      //Change Slides

      getCurrentIndex= imAdots.indexOf(this);
      selectedSlidesImg = slidesImg[getCurrentIndex]
      fourImgGrid.style.left = (getCurrentIndex*-1 + '00%');

    (getCurrentIndex==0?servicesWorkImageBoxPosition=0:
      servicesWorkImageBoxPosition = (getCurrentIndex*-100))

    if(slidesImg.indexOf(selectedSlidesImg)==0){
      servicesWorkStage=0
    }else{
      servicesWorkStage = slidesImg.indexOf(selectedSlidesImg)
    }

    this.style.background="#fff"
    const filteredItemsImg = imAdots.filter((value, index) => getCurrentIndex !== index);
    filteredItemsImg.forEach(dot=>{
      dot.style.background="transparent"
    })
    });



    return servicesWorkImageBoxPosition,servicesWorkStage;

  });

}
dotsChangeServices()
