export default function About() {
    return (
        <div className="container mt-4">
            <h1 className="text-center">Acerca de</h1>
            <p className="text-center">FavMovies es una aplicación web que permite a los usuarios ver información sobre películas y series de televisión. Los usuarios pueden buscar películas y series de televisión por título, género y año de lanzamiento. Los usuarios también pueden agregar películas y series de televisión a sus favoritos.</p>
            <p className="text-center">FavMovies utiliza la API de The Movie Database (TMDb) para obtener información sobre películas y series de televisión.</p>
            <p className="text-center">FavMovies es una aplicación web creada por <a className="text-info" href="https://www.linkedin.com/in/giorgi-gongadze-meladze-3968b7100/" target="_blank" rel="noreferrer">Giorgi Gongadze Meladze</a>.</p>
        </div>
    );
}