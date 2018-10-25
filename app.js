//section 1: the model - in which we'll store all the lists of cats,
//pictures, and click-numbers
let model = {
  catNumbers: [0,1,2,3,4],
  catNames: ['Scaredy', 'Staredy', 'Weirdy', 'Beardy', 'Dirty'],
  catImages: ['img/cat1.jpg', 'img/cat2.jpg', 'img/cat3.jpg', 'img/cat4.jpg', 'img/cat5.jpg'],
  catClicks: [0,0,0,0,0]
};

let octopus = {
  allCats: function() {
    let cats = [];
    function Cat(name,imageURL,clicks) {
        this.name = name;
        this.imageURL = imageURL;
        this.clicks = clicks;
      }
      for (number of model.catNumbers) {
      cats[number] = new Cat(model.catNames[number], model.catImages[number], model.catClicks[number]);
    }
    return cats;
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
