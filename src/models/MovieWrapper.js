import ClassMovie from "./ClassMovie";

export default class MovieWrapper{
    constructor(data){
        this.id = data.id;
        this.user =  data.user;
        this.movie = new ClassMovie(data.movie);
        this.isFavorite = data.isFavorite || false;
        this.isWatchlist = data.isWatchlist || false;
    }
}