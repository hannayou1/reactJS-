import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Privacy from "./routes/Privacy";
import Contact from "./routes/Contact";
import usePageMeta from "./usePageMeta";
import ScrollToTop from "./ScrollToTop";

import "./App.css";

function NotFound() {
	usePageMeta("페이지를 찾을 수 없습니다", "요청하신 페이지를 찾을 수 없습니다.");

	return (
		<main className="content-page">
			<p className="eyebrow">404 · NOT FOUND</p>
			<h1>페이지를 찾을 수 없습니다.</h1>
			<p>주소가 변경되었거나 페이지가 삭제되었을 수 있습니다.</p>
			<Link className="text-link" to="/">영화 목록으로 돌아가기</Link>
		</main>
	);
}

function App() {
	return (
		<BrowserRouter>
			<div className="app-shell">
				<ScrollToTop />
				<header className="site-header">
					<Link className="site-brand" to="/" aria-label="FRAME/FILM 홈">
						<span className="brand-mark" aria-hidden="true">F</span>
						<span>FRAME<span className="brand-accent">/</span>FILM</span>
					</Link>
					<nav className="primary-nav" aria-label="주요 메뉴">
						<Link to="/">영화 순위</Link>
						<Link to="/about">서비스 소개</Link>
					</nav>
				</header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/movie/:id" element={<Detail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<footer className="site-footer">
					<div className="footer-inner">
						<div>
							<strong>FRAME/FILM</strong>
							<p>영화 정보를 확인하고 다음 관람작을 발견해 보세요.</p>
						</div>
						<nav className="footer-nav" aria-label="서비스 정보">
							<Link to="/about">서비스 소개</Link>
							<Link to="/privacy">개인정보처리방침</Link>
							<Link to="/contact">문의 및 정정 요청</Link>
						</nav>
					</div>
					<p className="footer-note">독립 영화 정보 서비스이며, 영화 제작사·배급사·극장 및 공공기관과 제휴 또는 공식 관계가 없습니다.</p>
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
