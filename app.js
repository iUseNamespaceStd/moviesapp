// Movie API
const MOVIES_API = "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON";
// Array containing the list of movies
let movies = [];

// Load movies on load
window.onload = loadMovies();

// Fetch api and assign the data to array
function loadMovies() {
    fetch(MOVIES_API)
        .then(res => res.json())
        .then(data => {
            movies = JSON.parse(JSON.stringify(data));
            buildMovies(movies);
        })
}

/**
 * Build the list of movies
 * For Each movie a card is built and gets added to the container
 * Finally, the container is added to the body
 */
function buildMovies(movies) {
    let container = "";
    movies.forEach(movie => {
        container += buildMovie(movie);
    });
    document.querySelector('.content').innerHTML = container;
}

// Build the card for each movie
function buildMovie(movie) {
    // Define div element
    let str = "<div class='card'>";
    //Define content of div
    if (movie && movie['Title']) {
        if (movie['Images'] && movie['Images'].length > 0) {
            str += ("<img class='movie-img' src='" + movie['Images'][0] + "'>"); 
        }
        str += ("<div>" + movie['Title'] + "</div>")
    }
    // Define end of div element
    str += "</div>";
    // Return the div element
    return str;
}

// Filter list of movies
function filter() {
    const userInput = document.querySelector('#search').value;
    if (userInput.length > 1) {
        const filteredMov = movies.filter(m => m && m.Title.toLowerCase().includes(userInput.toLowerCase()));
        buildMovies(filteredMov);
    } else {
        loadMovies();
    }
}