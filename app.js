
//make a catpictures object with catnames
//for each catpicture:
//create a cat container
//inside, put 3 divs, one with cat name
//and one with cat picture
//and one with the click counter

const Cat = function Cat(name) {
  this.name = name;
  this.imagesource = 'img/'+this.name+'.jpg';
  this.clicks = 0;
  this.sidebar = function() {
    let catMenu = document.querySelector('.sidebar');
    let newCatName = document.createElement('div');
    newCatName.classList = this.name;
    newCatName.classList.add('sidebar-entry');
    newCatName.innerText = this.name;
    catMenu.appendChild(newCatName);
  }
}
const catNames = ['Staredy', 'Scaredy'];

for (x of catNames) {
  console.log(x);
  let newCat = new Cat(x);
  console.log(newCat);
  newCat.sidebar();
}

function drawCatDiv(cat) {
  //create new cat div
  let catContainer = document.createElement('div');
  catContainer.classList.add(cat);
  catContainer.classList.add("cat-box");
  //add name & picture
  catContainer.innerHTML = cat + '<br></br><img class="cat-picture '+cat+'" src="img/' + cat + '.jpg">' ;
  let mainContainer = document.querySelector('.container');
  mainContainer.appendChild(catContainer);
  //add clicker
  let catClicker = document.createElement('div');
  catClicker.innerHTML = '<div class="title-click">Clicks: <span class="'+cat+'">'+cat+'</span></div>';
  catContainer.appendChild(catClicker);
};

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('sidebar-entry')) {
    if (document.querySelector('.cat-box') !== null) {
      let catBoxToRemove = document.querySelector('.cat-box');
      catBoxToRemove.parentElement.removeChild(catBoxToRemove);
    };
    drawCatDiv(e.target.classList[0]);
  } else if (e.target.classList.contains('cat-picture')) {
    let matchingDivs = document.getElementsByClassName(e.target.classList.value);
    let currentClickNumber = matchingDivs[1].innerText;
    let newClickNumber = Number(currentClickNumber) + 1;
    matchingDivs[1].innerText = newClickNumber;
  } else {
    return;
  }
});
