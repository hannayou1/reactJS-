import PropTypes from "prop-types";

function Movie({ id, title, synopsis, cast, year, region, posterUrl, releaseDate, rank, audience, boxOfficeRevenue }) {
    return (
        <article className="movie-card">
            <a className="movie-poster-link" href={`/movie/${id}`} aria-label={`${title} 상세 보기`}>
                <div className="movie-poster poster-placeholder" role="img" aria-label={`${title} 포스터`}>
                    <span className="poster-kicker" aria-hidden="true">{region === "국내" ? "KOREAN" : "INTERNATIONAL"} CINEMA · {year}</span>
                    <span className="poster-title" aria-hidden="true">{title}</span>
                    <span className="poster-caption" aria-hidden="true">BOX OFFICE #{rank}</span>
                    <img className="poster-image" src={posterUrl} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                </div>
                <span className="poster-overlay">상세 보기 <span aria-hidden="true">↗</span></span>
            </a>
            <div className="movie-card-content">
                <div className="movie-card-heading">
                    <h2><a href={`/movie/${id}`}>{title}</a></h2>
                    <span className="movie-rank">#{rank}</span>
                </div>
                <span className={`movie-region ${region === "국내" ? "movie-region-domestic" : "movie-region-foreign"}`}>{region}</span>
                <p className="movie-year">{releaseDate} 개봉</p>
                <p className="movie-synopsis">{synopsis}</p>
                <p className="movie-cast"><strong>출연</strong> {cast.length ? `${cast.slice(0, 3).join(", ")}${cast.length > 3 ? ` 외 ${cast.length - 3}명` : ""}` : "정보 없음"}</p>
                <p className="movie-audience">{audience.toLocaleString("ko-KR")}명 관람</p>
                <p className="movie-revenue">매출 {boxOfficeRevenue.toLocaleString("ko-KR")}원</p>
            </div>
        </article>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    cast: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    audience: PropTypes.number.isRequired,
    boxOfficeRevenue: PropTypes.number.isRequired,

}

export default Movie;