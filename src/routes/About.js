import { Link } from "react-router-dom";
import movieList from "../movie_list.json";
import usePageMeta from "../usePageMeta";

function About() {
	usePageMeta(
		"서비스 소개와 데이터 기준",
		"FRAME/FILM의 운영 목적, 영화 데이터 출처와 통합 박스오피스 순위 산정 방법을 안내합니다."
	);

	return (
		<main className="content-page">
			<p className="eyebrow">ABOUT FRAME/FILM</p>
			<h1>영화 정보를 한눈에, 기준은 투명하게</h1>
			<p className="page-lead">FRAME/FILM은 한국에서 개봉한 영화의 정보를 한곳에서 살펴볼 수 있도록 정리하는 독립 영화 정보 서비스입니다. 작품을 찾고 비교할 때 필요한 기본 정보를 읽기 쉽게 제공합니다.</p>

			<section className="content-section">
				<h2>무엇을 제공하나요?</h2>
				<p>{movieList.data.year}년 한국 영화 시장의 국내·외국 작품 목록을 제공하며, 작품별 개봉일, 줄거리, 출연진, 누적 관객 수와 매출을 확인할 수 있습니다. 제목·줄거리·출연진 검색과 국내/외국 분류 필터도 이용할 수 있습니다.</p>
			</section>

			<section className="content-section">
				<h2>순위는 어떻게 계산하나요?</h2>
				<ol>
					<li>이 서비스에 수록된 작품을 누적 관객 수가 많은 순으로 정렬합니다.</li>
					<li>관객 수가 같으면 누적 매출이 많은 작품을 앞에 표시합니다.</li>
					<li>관객 수와 매출이 모두 같으면 데이터의 작품 ID 순으로 표시합니다.</li>
				</ol>
				<p>따라서 이 페이지의 통합 순위는 KOBIS가 발표하는 별도의 공식 순위가 아니라, 이 서비스가 보유한 목록 안에서 산출한 비교 순위입니다.</p>
			</section>

			<section className="content-section">
				<h2>출처와 정확성</h2>
				<p>박스오피스 통계의 출처는 영화관입장권통합전산망(KOBIS)입니다. <a href={movieList.data_sources["국내"]} target="_blank" rel="noopener noreferrer">국내 영화 통계</a>와 <a href={movieList.data_sources["외국"]} target="_blank" rel="noopener noreferrer">외국 영화 통계</a>를 확인할 수 있습니다.</p>
				<p>현재 사이트는 데이터 파일에 반영된 값을 표시하며, 통계 기준일이나 자동 갱신 시각을 제공하지 않습니다. 줄거리와 출연진은 항목별 출처 링크가 제공되지 않으므로, 통계와 작품 정보 모두 중요한 판단에는 원 출처를 확인해 주세요.</p>
			</section>

			<section className="content-section">
				<h2>독립 서비스 안내</h2>
				<p>FRAME/FILM은 영화 제작사·배급사·극장 또는 정부기관이 운영하는 공식 서비스가 아니며, 이들과의 제휴나 후원을 주장하지 않습니다. 포스터 이미지는 KOBIS에서 제공하는 이미지 주소를 사용합니다.</p>
			</section>

			<div className="page-actions">
				<Link className="button-link" to="/">영화 목록 보기</Link>
				<Link className="text-link" to="/contact">문의 및 정정 요청</Link>
			</div>
		</main>
	);
}

export default About;
