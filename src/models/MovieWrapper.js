import Movie from "./Movie";

export default class MovieWrapper{
    constructor(data){
        this.id = data.id;
        this.user =  data.user;
        this.movie = new Movie(data.movie);
        this.isFavorite = data.isFavorite || false;
        this.isWatchlist = data.isWatchlist || false;
    }
}