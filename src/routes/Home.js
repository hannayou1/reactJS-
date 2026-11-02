import { useEffect, useState } from "react";
import Movie from "../Movie";
import movieList from "../movie_list.json";
import { getMoviesByOverallRank } from "../movieRanking";

function Home () {
    const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([])

	useEffect(() => {
		setMovies(getMoviesByOverallRank(movieList.data.movies));
		setLoading(false);
	},[]);

	return (
		<main className="catalog-page">
			{loading ? <h1>Loading...</h1> :
				<>
					<section className="catalog-intro">
						<p className="eyebrow">2026 BOX OFFICE</p>
						<h1>올해의 <span>영화</span></h1>
						<p className="intro-copy">국내와 해외 영화의 2026년 한국 박스오피스 기록을 확인해 보세요.</p>
						<div className="collection-count"><span>{movies.length}</span>편의 영화</div>
					</section>
					<section className="movie-grid" aria-label="영화 목록">
					{movies.map((movie) =>  (
					<Movie
						key={movie.id}
						id={movie.id}
						title= {movie.title} 
						synopsis={movie.synopsis}
						cast={movie.cast}
						year={movie.year}
						region={movie.region}
						posterUrl={movie.poster_url}
						releaseDate={movie.release_date}
						rank={movie.overallRank}
						audience={movie.audience}
						boxOfficeRevenue={movie.box_office_revenue}
					/>
					))}
					</section>
				</>
			}
		
		</main>
	);

}

export default Home;