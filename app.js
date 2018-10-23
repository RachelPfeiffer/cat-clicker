const catPic = document.querySelector(".image");
let clickNumber = Number((document.querySelector('.click-number')).innerText);
let changeThisOnscreen = document.querySelector('.click-number');
catPic.addEventListener('click', function incrementClicks() {
  clickNumber += 1;
  changeThisOnscreen.innerText = clickNumber;
});
