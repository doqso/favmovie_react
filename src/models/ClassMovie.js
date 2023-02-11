export default class ClassMovie{
    /**
     * @param {number} id
     * @param {string} title
     * @param {string} overview
     * @param {string} poster_path
     * @param {Array.<number>} release_date
     * @param {number} budget
     * @param {number} revenue
     * @param {Array.<{id: number, name: string}>} genres
     */
    constructor(object){
        this.id = object.id;
        this.title = object.title;
        this.overview = object.overview;
        this.poster_path = object.poster_path;
        this.release_date = new Date(object.release_date)
        .toLocaleDateString("en-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        })
        this.budget = object.budget;
        this.revenue = object.revenue;
        this.genres = object.genres;
    }
}