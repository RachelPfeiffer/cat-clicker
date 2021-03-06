//section 1: the model - in which we'll store all the lists of cats,
//pictures, and click-numbers
let model = {
  cats {
    {name: 'Scaredy', imageURL: 'img/cat1.jpg', clicks: 0},
    {name: 'Staredy', imageURL: 'img/cat2.jpg', clicks: 0},
    {name: 'Weirdy', imageURL: 'img/cat3.jpg', clicks: 0},
    {name: 'Beardy', imageURL: 'img/cat4.jpg', clicks: 0},
    {name: 'Dirty', imageURL: 'img/cat5.jpg', clicks: 0}
  }
  catNumbers: [0,1,2,3,4],
  catNames: ['Scaredy', 'Staredy', 'Weirdy', 'Beardy', 'Dirty'],
  catImages: ['img/cat1.jpg', 'img/cat2.jpg', 'img/cat3.jpg', 'img/cat4.jpg', 'img/cat5.jpg'],
  catClicks: [0,0,0,0,0]
};

let octopus = {

  init: function() {
    sidebar.render();
    displayArea.render();
    displayArea.updateOnClick();
  },

  allCats: function() {
  findClickedCatInfo: {
    clickedCatIndex:  function(x) {
      return model.catNames.indexOf(x);
    },
    clickedCatName: function(x) {
      return model.catNames[x];
    },
    clickedCatImage: function(x) {
      return model.catImages[x];
    },
    clickedCatClicks: function(x) {
      return model.catClicks[x];
  }
},

    incrementCatClicks: function(x) {
      let indexToIncrement = model.catNames.indexOf(x);
      model.catClicks[indexToIncrement] +=1;
    }
}

let sidebar = {
  render: function() {
    for (cat of octopus.allCats()) {
      let sidebarDiv = document.createElement('div');
      sidebarDiv.classList.add('.sidebar-entry');
      let sidebar = document.querySelector('.sidebar');
      sidebarDiv.innerText = cat.name;
      sidebar.append(sidebarDiv);
  }
}
}

let displayArea = {
  render: function() {
    //add click event so that when I click a cat name the associated name, picture, and clicks pop up
    //or if I click a cat picture the associated cat clicker is incremented and the data is updated
    //add area to display name
    const displayArea = document.querySelector('.container');
    const catNameToDisplay = document.createElement('div');
    catNameToDisplay.classList = ('cat-name');
    displayArea.append(catNameToDisplay);

    //add area to display picture
    const pictureToDisplay = document.createElement('div');
    pictureToDisplay.classList = "cat-pic";
    displayArea.append(pictureToDisplay);

    //add area to display catClicks
    const clickerToDisplay = document.createElement('div');
    clickerToDisplay.classList = "click-area";
    displayArea.append(clickerToDisplay);
  },

  updateInfo: function(name) {
    let clickedCatName = octopus.findClickedCatInfo.clickedCatName(octopus.findClickedCatInfo.clickedCatIndex(name));
    let clickedCatImage = octopus.findClickedCatInfo.clickedCatImage(octopus.findClickedCatInfo.clickedCatIndex(name));
    let clickedCatClicks = octopus.findClickedCatInfo.clickedCatClicks(octopus.findClickedCatInfo.clickedCatIndex(name));

    function updateName() {
      const nameSection = document.querySelector('.cat-name');
      nameSection.innerText = clickedCatName;
    };
    function updatePic() {
      const picSection = document.querySelector('.cat-pic');
      picSection.innerHTML = '<img class="cat-pic" src="'+clickedCatImage+'" alt="There\'s actually an invisible cat sitting here">';
    };
    function updateClickArea() {
      const clickSection = document.querySelector('.click-area');
      clickSection.innerHTML = '<div>Clicks: </div><div class="click-number">'+ clickedCatClicks + '</div>';
    }
    updateName();
    updatePic();
    updateClickArea();
  },

  updateOnClick: function() {
    //find the buttons in the sidebar
    const buttons = document.querySelectorAll('.sidebar-entry');
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('.sidebar-entry')) {
        displayArea.updateInfo(e.target.innerText);

      } else if (e.target.classList.contains('cat-pic')) {
        octopus.incrementCatClicks(document.querySelector('.cat-name').innerText);
        displayArea.updateInfo(document.querySelector('.cat-name').innerText);
      }
    });
  }
  }
octopus.init();
