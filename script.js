const numberOfFilms = +prompt("Quanti film hai visto?");

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,

};

let title_film = prompt("Qual è il titolo dell'ultimo film che hai visto?");
let rating_film = +prompt("Da' un voto all'ultimo film che hai visto");

personalMovieDB.movies[title_film] = rating_film;






console.log(personalMovieDB);
