import { Link, useParams } from "react-router-dom";
import movieList from "../movie_list.json";
import { getMoviesByOverallRank } from "../movieRanking";
import usePageMeta from "../usePageMeta";

function Detail(){
    const { id } = useParams();
    const movieId = Number(id);
    const movie = getMoviesByOverallRank(movieList.data.movies).find((item) => item.id === movieId);
    usePageMeta(
        movie ? `${movie.title} 영화 정보` : "영화를 찾을 수 없습니다",
        movie ? `${movie.title}의 개봉일, 줄거리, 출연진, 관객 수와 매출 정보를 확인하세요.` : "요청하신 영화 정보를 찾을 수 없습니다."
    );

    if (!movie) {
        return <main className="detail-page"><p className="empty-state">영화를 찾을 수 없습니다.</p></main>;
    }

    return (
        <main className="detail-page">
            <Link className="back-link" to="/">← 영화 목록으로</Link>
            <article className="detail-card">
                <div className="detail-poster-wrap">
                    <div className="detail-poster poster-placeholder" role="img" aria-label={`${movie.title} 포스터`}>
                        <span className="poster-kicker" aria-hidden="true">{movie.region === "국내" ? "KOREAN" : "INTERNATIONAL"} CINEMA · {movie.year}</span>
                        <span className="poster-title" aria-hidden="true">{movie.title}</span>
                        <span className="poster-caption" aria-hidden="true">BOX OFFICE #{movie.overallRank}</span>
                        <img className="poster-image" src={movie.poster_url} alt="" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                    </div>
                </div>
                <div className="detail-content">
                    <p className="eyebrow">2026 BOX OFFICE · {movie.region}</p>
                    <h1>{movie.title}</h1>
                    <div className="detail-meta">
                        <span>{movie.release_date} 개봉</span>
                        <span>국내외 통합 관객 순위 {movie.overallRank}위</span>
                        <span>{movie.region} 박스오피스 {movie.rank}위</span>
                    </div>
                    <section className="detail-summary">
                        <h2>줄거리 소개</h2>
                        <p>{movie.synopsis}</p>
                    </section>
                    <section className="detail-cast">
                        <h2>출연진</h2>
                        {movie.cast.length > 0 ? (
                            <ul>
                                {movie.cast.map((actor) => <li key={actor}>{actor}</li>)}
                            </ul>
                        ) : (
                            <p>등록된 출연진 정보가 없습니다.</p>
                        )}
                    </section>
                    <div className="detail-audience">
                        <span>누적 관객 수</span>
                        <strong>{movie.audience.toLocaleString("ko-KR")}<small>명</small></strong>
                    </div>
                    <div className="detail-revenue">
                        <span>누적 매출</span>
                        <strong>{movie.box_office_revenue.toLocaleString("ko-KR")}원</strong>
                    </div>
                    <p className="data-source">
                        통계 출처: <a href={movieList.data_sources[movie.region]} target="_blank" rel="noopener noreferrer">영화관입장권통합전산망(KOBIS)</a>.
                        통계 기준일은 별도로 표시되지 않으며, 수록된 자료와 공식 집계 시점에 차이가 있을 수 있습니다.
                    </p>
                </div>
            </article>
        </main>
    );
}

export default Detail;