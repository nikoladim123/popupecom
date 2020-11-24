var contactUsButton = document.getElementsByClassName('contactUsButton');
var contactUsContainer = document.getElementsByClassName('contactUsContainer');
var contcactUsContainerID = document.getElementById('contcactUsContainerID');

var contactUsToogle = 1;
function toogleContact() {
  if(contactUsToogle){
    contcactUsContainerID.className = 'contactUsContainer contactUsContainerShow'
    contactUsToogle = 0;
  }else{
    contcactUsContainerID.className = 'contactUsContainer contactUsContainerHide'
    contactUsToogle = 1;
  }
}

contactUsButton[0].addEventListener('click',toogleContact);
