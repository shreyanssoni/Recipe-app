let myButton = document.getElementById("button2");
let myForm = document.getElementById("form");
let ingredients;
let itemRecipe;
myButton.addEventListener("click", (element) => {
  let nameofitem = myForm.elements[2];
  var itemName = nameofitem.value;
  let myrecipes = localStorage.getItem("myrecipes");
  if (myrecipes == null) {
    recipeObj = [];
  } else {
    recipeObj = JSON.parse(myrecipes);
  }
  recipeObj.push(itemName);
  localStorage.setItem("myrecipes", JSON.stringify(recipeObj));
});

function homefunction(){
  window.location ="index.html"
}
