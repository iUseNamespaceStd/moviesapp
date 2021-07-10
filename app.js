const MOVIES_API = "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON";
let mov = [];
let movCopy = [];


window.onload = loadMovies();

function loadMovies() {
    fetch(MOVIES_API)
        .then(res => res.json())
        .then(data => {
            data.forEach(movie => {
                const card = document.createElement("div");
                const image = document.createElement("img");
                const info = document.createElement("div");

                const wrapper = `${movie.Title} ${movie.Year}`
                mov.push(wrapper);
                movCopy.push(wrapper);

                card.className = "card";

                image.className = "movie-img";
                image.src = movie.Images[1];

                info.className = "info"
                info.innerHTML = wrapper;
                
                document.querySelector('.content').append(card);
                card.append(image);
                card.append(info);
            })
        })
}

function filteredMovies(movies) {
    for (let i = 0; i < movies.length; i++) {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const info = document.createElement("div"); 
    
        card.className = "card";
        image.className = "movie-img";
        info.className = "wrapper";
        info.innerHTML = movies[i];
    
        document.querySelector('.content').append(card);
        card.append(image);
        card.append(info);

    }
}

function filter() {
    const userInput = document.querySelector('#search').value;
    if (userInput.length > 1) {
        mov = movCopy.filter(m => m && m.toLowerCase().includes(userInput.toLowerCase()));
        filteredMovies(mov);
    } else {
        loadMovies();
    }
}