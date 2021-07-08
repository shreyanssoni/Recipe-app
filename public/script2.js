document.addEventListener("DOMContentLoaded", function () {
  Addnew();
});
Addnew = () => {
  let myrecipes = localStorage.getItem("myrecipes");
  if (myrecipes == null) {
    recipeObj = [];
  } else {
    recipeObj = JSON.parse(myrecipes);
  }
  let html = "";
  recipeObj.forEach(function (element, index) {
    let splitobj = [];
    splitobj = element.split(" ");
    html += `<div class= "card">
      <a href="${String(element)}.html" target="_blank" >
      <p class="text">${element}</p>
          <img src="https://source.unsplash.com/300x300?${splitobj.toString()}" alt="${element} Image" class="card-image">    
      </a>
      <p class="text delete" id="${index}" onclick = del(this.id)>X Remove</p> 
      </div>
      `;
  });
  let recipeElem = document.getElementById("myrecipes");
  if (recipeObj.length != 0) {
    recipeElem.innerHTML = html;
  } else {
    recipeElem.innerHTML = `<p id="empty" >Click on the button to add New Recipes!</p>`;
  }
};

function del(index) {
  let myrecipes = localStorage.getItem("myrecipes");
  if (myrecipes == null) {
    recipeObj = [];
  } else {
    recipeObj = JSON.parse(myrecipes);
  }
  recipeObj.splice(index, 1);
  localStorage.setItem("myrecipes", JSON.stringify(recipeObj));
  Addnew();
}
