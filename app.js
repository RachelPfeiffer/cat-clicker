
//make a catpictures object with catnames
//for each catpicture:
//create a cat container
//inside, put 3 divs, one with cat name
//and one with cat picture
//and one with the click counter

const Cat = function Cat(name, image) {
  this.name = name;
  this.image = image;
  this.clicks = 0;
}

let staredyCat = new Cat('Staredy', 'img/staredy.jpg');
let scaredyCat = new Cat('Scaredy', 'img/scaredy.jpg');

function newCatDiv(cat) {
  let catContainer = document.createElement('div');
  catContainer.classList = "unclicked";
  catContainer.classList.add(cat.name);
  catContainer.innerHTML = cat.name + '<br></br><img class="'+cat.name+'" src="img/' + cat.name + '.jpg">' ;
  let mainContainer = document.querySelector('.container');
  mainContainer.appendChild(catContainer);
  let catClicker = document.createElement('div');
  catClicker.innerHTML = '<div class="title-click">Clicks: <span class="'+cat.name+'">'+cat.clicks+'</span></div>';
  catContainer.appendChild(catClicker);
};

newCatDiv(staredyCat);
newCatDiv(scaredyCat);
document.addEventListener('click', function(e) {
  let matchingDivs = document.getElementsByClassName(e.target.classList.value);
  let currentClickNumber = matchingDivs[1].innerText;
  let newClickNumber = Number(currentClickNumber) + 1;
  matchingDivs[1].innerText = newClickNumber;
});
