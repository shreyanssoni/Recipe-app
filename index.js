const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const fetch = require("node-fetch");
const { json } = require("body-parser");
let nameofrecipe;
let ingreds;
let recipeofitem;
let recipeObj = [];
let nameofrecipeagain;
let timereq;
let serv;

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/form", function (req, res) {
  (nameofrecipe = String(req.body.name)),
    (ingreds = String(req.body.ingreds)),
    (recipeofitem = String(req.body.rec)),
    (timereq = String(req.body.timeofcooking)),
    (serv = String(req.body.servings));
  awaiting();
  function awaiting() {
    nameofrecipeagain = nameofrecipe.replace(/ /g, "%20");
    fs.writeFile(
      `./public/${nameofrecipeagain}.html`,
      `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Recipes|Collection by Shreyans Soni</title>
      <link rel="stylesheet" href="style.css"/>
      
      </head>
      <body id="recipepage">
      <nav id="nav-bar">
      <h1 id="title">Recipes Collection</h1>
      </nav>
      
      <div id="main-content">
      <div id="headimage">
      <p id="headtext">${nameofrecipe}</p>
      </div>
      <p id="cooking-time">
      Total Time: ${timereq} <br>
      Servings: ${serv} <br>
      </p>
      <h1 id="ingredients">Ingredients</h1>
      <p id="ingp">${ingreds}</p>
      <span>
      <h1 id="recipe">Recipe</h1>
      </span>
      <div id="insidecontent">
      <p>${recipeofitem}</p>
      </div>
      </div>
      </body>
      <footer id>
      <p id="footer-text">@This website is made by Shreyans Soni</p>
      </footer>
      </html>
      `,
      () => {
        console.log("file was written!");
        await2();
        res.redirect("/");
      }
    );
  }
});
function await2() {
  recipeObj.push(nameofrecipeagain);
  recipeObj.forEach(function(element) {
    app.get(`/${element}`, (req, res) => {
      console.log( `the file has been stored` + __dirname +  `${element}.html`)
      res.sendFile(path.join(__dirname, `${element}.html`));
    });
  });
}


