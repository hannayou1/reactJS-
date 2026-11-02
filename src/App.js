import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="app-shell">
				<header className="site-header">
					<a className="site-brand" href="/">
						<span className="brand-mark" aria-hidden="true">F</span>
						<span>FRAME<span className="brand-accent">/</span>FILM</span>
					</a>
					<span className="header-caption">영화가 있는 하루</span>
				</header>
				<Switch>
					<Route path="/hello">
						<h2>hello</h2>
					</Route>
					<Route path="/movie/:id">
						<Detail/>
					</Route>
					<Route path="/">
						<Home/>
					</Route>
				</Switch>
				<footer className="site-footer">좋은 영화와 함께하는 시간</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
