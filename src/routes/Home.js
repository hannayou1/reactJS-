import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../Movie";
import movieList from "../movie_list.json";
import { getMoviesByOverallRank } from "../movieRanking";
import usePageMeta from "../usePageMeta";

function Home () {
	usePageMeta(
		"2026 한국 개봉 영화 박스오피스",
		"2026년 한국 개봉 영화의 관객 수와 매출을 국내·외국 영화별로 찾아보고 비교해 보세요."
	);
	const [query, setQuery] = useState("");
	const [region, setRegion] = useState("전체");
	const movies = useMemo(() => getMoviesByOverallRank(movieList.data.movies), []);
	const filteredMovies = useMemo(() => {
		const normalizedQuery = query.trim().toLocaleLowerCase("ko-KR");

		return movies.filter((movie) => {
			const matchesRegion = region === "전체" || movie.region === region;
			const searchableText = [movie.title, movie.synopsis, ...movie.cast]
				.join(" ")
				.toLocaleLowerCase("ko-KR");
			return matchesRegion && (!normalizedQuery || searchableText.includes(normalizedQuery));
		});
	}, [movies, query, region]);

	return (
		<main className="catalog-page">
			<section className="catalog-intro">
				<p className="eyebrow">KOREAN BOX OFFICE · {movieList.data.year}</p>
				<h1>올해의 <span>영화</span></h1>
				<p className="intro-copy">국내와 외국 영화를 한눈에 살펴보고, 관객이 많이 찾은 작품부터 확인해 보세요.</p>
				<div className="catalog-highlights" aria-label="목록 정보">
					<div><strong>{movies.length}</strong><span>편의 작품</span></div>
					<div><strong>{movieList.data.year}</strong><span>집계 연도</span></div>
					<div><strong>관객 수</strong><span>기본 정렬 기준</span></div>
				</div>
			</section>

			<section className="catalog-tools" aria-label="영화 목록 검색 및 필터">
				<div className="search-field">
					<label htmlFor="movie-search">영화 찾기</label>
					<input
						id="movie-search"
						type="search"
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="영화 제목, 줄거리, 출연진 검색"
					/>
				</div>
				<fieldset className="region-filter">
					<legend>영화 구분</legend>
					{["전체", "국내", "외국"].map((item) => (
						<button
							key={item}
							type="button"
							className={region === item ? "filter-button is-active" : "filter-button"}
							aria-pressed={region === item}
							onClick={() => setRegion(item)}
						>
							{item}
						</button>
					))}
				</fieldset>
			</section>

			<div className="results-heading">
				<h2>{region === "전체" ? "통합 박스오피스" : `${region} 영화`}</h2>
				<p>{filteredMovies.length}편 · 관객 수가 많은 순</p>
			</div>
			{filteredMovies.length > 0 ? (
				<section className="movie-grid" aria-label="영화 목록">
					{filteredMovies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
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
			) : (
				<div className="empty-state">
					<p>검색 결과가 없습니다.</p>
					<button type="button" className="text-button" onClick={() => { setQuery(""); setRegion("전체"); }}>
						검색 조건 초기화
					</button>
				</div>
			)}

			<section className="source-note">
				<div>
					<p className="eyebrow">DATA &amp; METHOD</p>
					<h2>순위와 데이터 기준을 확인하세요</h2>
					<p>통합 순위는 이 페이지에 수록된 작품을 누적 관객 수로 정렬합니다. 자료의 기준일은 별도로 표시하지 않으므로 최신 수치와 다를 수 있습니다.</p>
				</div>
				<Link className="text-link" to="/about">출처와 산정 방식 보기 <span aria-hidden="true">→</span></Link>
			</section>
		</main>
	);
}

export default Home;