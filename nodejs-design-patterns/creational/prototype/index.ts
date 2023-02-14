import { Movie, MovieInput } from './movie';

const movieInput: MovieInput = {
    movieName: 'Interstellar',
    directedBy: 'Christopher Nolan',
    stars: [
        'Matthew McConaughey',
        'Anne Hathaway',
        'Jessica Chastain'
    ],
    releaseYear: 2014,
};

const interstellarMovie = new Movie(movieInput);

const anotherInterstellarMovie = interstellarMovie.clone();
anotherInterstellarMovie.setMovieName = 'Interstellar 2';
anotherInterstellarMovie.setReleaseYear = 2023;

console.log(interstellarMovie);
console.log(anotherInterstellarMovie);