import { Link } from "react-router-dom";
import usePageMeta from "../usePageMeta";

function Contact() {
	usePageMeta(
		"문의 및 정보 정정",
		"FRAME/FILM의 문의 채널 및 영화 정보 정정 요청에 대한 안내입니다."
	);

	return (
		<main className="content-page">
			<p className="eyebrow">CONTACT &amp; CORRECTIONS</p>
			<h1>문의 및 정보 정정</h1>
			<p className="page-lead">영화 정보의 오류나 서비스 개선 의견을 받을 공개 문의 이메일은 아직 등록되어 있지 않습니다. 연락 채널이 준비되면 이 페이지에 안내하겠습니다.</p>
			<section className="notice-card">
				<h2>데이터를 확인할 때</h2>
				<p>관객 수·매출 등 박스오피스 통계의 최신 값과 상세 기준은 <a href="https://www.kobis.or.kr/" target="_blank" rel="noopener noreferrer">KOBIS 영화관입장권통합전산망</a>에서 확인해 주세요. FRAME/FILM의 순위 산정 기준은 <Link to="/about">서비스 소개</Link>에서 확인할 수 있습니다.</p>
			</section>
		</main>
	);
}

export default Contact;
