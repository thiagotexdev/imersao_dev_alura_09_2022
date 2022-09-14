function addMovie() {
    var favoriteMovie = document.getElementById("movie").value;
    if (favoriteMovie.endsWith(".jpg")) {
      listMoviesOnScreen(favoriteMovie);
    } else {
      console.log("Error: Invalid Movie Image Url");
    }
  
    document.getElementById("movie").value = "";
    // console.log(favoriteMovie);
  }
  
  function listMoviesOnScreen(favoriteMovie) {
    var elementFavoriteMovie = "<img src=" + favoriteMovie + ">";
    var elementListMovies = document.getElementById("listMovies");
  
    //elementFavoriteMovie.innerHTML = elementFavoriteMovie;
    elementListMovies.innerHTML = elementListMovies.innerHTML + elementFavoriteMovie;
  }
  