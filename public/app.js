var app = function () {
  addCat("Boba", "Sock Fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");

  addCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");

  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");

  addCat("Jim", "Pizza", "http://i0.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg");
};

var createCatUnorderedList = function() {
  var catUnorderedList = document.createElement('ul');
  catUnorderedList.classList.add('cat')
  return catUnorderedList;
}

var createNameItem = function(name) {
  var nameItem = document.createElement("li");
  nameItem.textContent = "Name: " + name;
  return nameItem;
}

var createFaveFoodItem = function(faveFood) {
  var faveFoodItem = document.createElement("li");
  faveFoodItem.textContent = "Favourite food: " + faveFood;
  return faveFoodItem;
}

var createImgUrlItem = function(imgUrl) {
  var imgUrlListItem = document.createElement("li");
  var imgUrlItem  = document.createElement("img");
  imgUrlItem.width = "500";
  imgUrlItem.src = imgUrl;
  imgUrlListItem.appendChild(imgUrlItem);
  return imgUrlListItem;
}

var appendCatElemets = function(catUnorderedList, nameItem, faveFoodItem, imgUrlItem) {
  var section = document.getElementById('cats');
  catUnorderedList.appendChild(nameItem);
  catUnorderedList.appendChild(faveFoodItem);
  catUnorderedList.appendChild(imgUrlItem);
  section.appendChild(catUnorderedList);
}

var addCat = function(name, faveFood, imgUrl) {
  var catUnorderedList = createCatUnorderedList();
  var nameItem = createNameItem(name);
  var faveFoodItem = createFaveFoodItem(faveFood);
  var imgUrlItem = createImgUrlItem(imgUrl);

  appendCatElemets(catUnorderedList, nameItem, faveFoodItem, imgUrlItem);
}




window.onload = app;
