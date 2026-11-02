import usePageMeta from "../usePageMeta";

function Privacy() {
	usePageMeta(
		"개인정보처리방침",
		"FRAME/FILM에서 처리하는 정보, 외부 링크와 광고 도입 시 개인정보 관련 안내를 확인하세요."
	);

	return (
		<main className="content-page">
			<p className="eyebrow">PRIVACY</p>
			<h1>개인정보처리방침</h1>
			<p className="page-lead">이 안내는 FRAME/FILM 웹사이트에서 현재 제공하는 기능을 기준으로 작성되었습니다. 기능이나 외부 서비스가 추가되면 내용을 함께 갱신합니다.</p>

			<section className="content-section">
				<h2>현재 수집하는 정보</h2>
				<p>현재 사이트에는 회원가입, 댓글, 문의 입력 양식, 광고 코드 및 자체 분석 도구가 없습니다. 검색어와 필터 선택은 브라우저 화면에서 목록을 좁히는 데 사용되며, 이 사이트의 별도 서버로 전송하거나 저장하지 않습니다.</p>
			</section>

			<section className="content-section">
				<h2>외부 서비스와 링크</h2>
				<p>영화 포스터와 통계 출처를 제공하기 위해 KOBIS 웹사이트의 이미지 및 페이지를 연결합니다. 해당 외부 서비스에 접속하면 각 서비스의 개인정보 처리방침과 쿠키 정책이 적용될 수 있습니다.</p>
			</section>

			<section className="content-section">
				<h2>광고 및 쿠키</h2>
				<p>현재 이 사이트에는 Google AdSense 광고가 설치되어 있지 않습니다. 향후 광고를 도입하는 경우 Google 및 광고 파트너가 쿠키 또는 유사 기술을 사용해 광고를 제공하거나 측정할 수 있습니다. 광고를 시작하기 전에 적용되는 정보 처리 내용과 이용자의 선택 방법을 확인해 이 방침을 갱신하겠습니다.</p>
			</section>

			<section className="content-section">
				<h2>문의</h2>
				<p>현재 공개된 개인정보 관련 문의 이메일은 등록되어 있지 않습니다. 연락 채널이 마련되면 이 페이지에 추가하겠습니다.</p>
			</section>
		</main>
	);
}

export default Privacy;
