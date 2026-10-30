import { useEffect, useState } from "react";
import Movie from "../Movie";

function Home () {
    const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([])

	useEffect(() => {
		setMovies(movieList.data.movies);
		setLoading(false);
	},[]);

	return (
		<div>
			{loading ? <h1>Loading...</h1> :
				<div>
					{movies.map((movie) =>  (
					<Movie
						key={movie.id}
						coverImg={movie.medium_cover_image} 
						title= {movie.title} 
						summary={movie.summary} 
						genres={movie.summary}
					/>
					))}
				</div>
			}
		
		</div>
	);

}

export default Home;