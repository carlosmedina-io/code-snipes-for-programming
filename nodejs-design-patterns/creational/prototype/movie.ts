import Cloneable from "./cloneable";

class Movie implements Cloneable {
    private movieName!: string;
    private directedBy!: string;
    private stars!: string[];
    private releaseYear!: number;

    constructor(input: MovieInput) {
        this.movieName = input.movieName;
        this.directedBy = input.directedBy;
        this.stars = input.stars;
        this.releaseYear = input.releaseYear;
    }
    
    set setMovieName(value: string) {
        this.movieName = value;
    }

    get getMovieName(): string {
        return this.movieName;
    }

    set setDirectedBy(value: string) {
        this.directedBy = value;
    }

    get getDirectedBy(): string {
        return this.directedBy;
    }

    set setStars(value: string[]) {
        this.stars = value;
    }

    get getStars(): string[] {
        return this.stars;
    }

    set setReleaseYear(value: number) {
        this.releaseYear = value;
    }

    get getReleaseYear(): number {
        return this.releaseYear;
    }

    clone(): Movie {
        const movieInput = {
            movieName: this.movieName,
            directedBy: this.directedBy,
            stars: this.stars,
            releaseYear: this.releaseYear,
        };
        return new Movie(movieInput);
    }
}

type MovieInput = {
    movieName: string;
    directedBy: string;
    stars: string[];
    releaseYear: number;
}

export { Movie, MovieInput, };