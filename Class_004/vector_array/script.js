//var movies1 = "Yesterday";
//var movies2 = "Matrix";
//var movies3 = "The Fast and Furious";

// usando vetores (arrays)
var moviesList = ["Yesterday", "Matrix", "The Fast and Furious"];

// adding new elements to array
moviesList.push("City of Angels");
moviesList.push("Fury");
// testing more tags
// test example tags: h1, strong

// printing without arrays
// document.write("<p>" + movies1 +"</p>");
// document.write("<p>" + movies2 +"</p>");
// document.write("<p>" + movies3 +"</p>");
// document.write("<p>" + moviesList +"</p>");

// printing with arrays
// document.write("<p>" + moviesList[0] +"</p>");
// document.write("<p>" + moviesList[1] +"</p>");
// document.write("<p>" + moviesList[2] +"</p>");
// document.write("<p>" + moviesList[3] +"</p>");

// loop -> for
// variable i = index
for (var i = 0; i < moviesList.length; i ++) {
  document.write("<p>" + moviesList[i] + "</p>");
}
