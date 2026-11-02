import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import movieList from "../movie_list.json";

function renderHome() {
	return render(
		<MemoryRouter>
			<Home />
		</MemoryRouter>
	);
}

describe("Home movie catalog", () => {
	test("filters the catalog by movie region", () => {
		const { container } = renderHome();

		fireEvent.click(screen.getByRole("button", { name: "국내" }));

		const cards = [...container.querySelectorAll(".movie-card")];
		const expectedCount = movieList.data.movies.filter((movie) => movie.region === "국내").length;
		expect(cards).toHaveLength(expectedCount);
		expect(cards.every((card) => card.querySelector(".movie-region").textContent === "국내")).toBe(true);
	});

	test("searches movie titles and restores the catalog when cleared", () => {
		const { container } = renderHome();
		const search = screen.getByRole("searchbox", { name: "영화 찾기" });

		fireEvent.change(search, { target: { value: "오디세이" } });
		expect(container.querySelectorAll(".movie-card")).toHaveLength(1);
		expect(screen.getByRole("heading", { name: "오디세이" }).textContent).toBe("오디세이");

		fireEvent.change(search, { target: { value: "검색 결과 없음" } });
		fireEvent.click(screen.getByRole("button", { name: "검색 조건 초기화" }));
		expect(container.querySelectorAll(".movie-card")).toHaveLength(movieList.data.movies.length);
	});

	test("movie poster and information link to the detail page", () => {
		const { container } = renderHome();
		const movieCard = container.querySelector(".movie-card");
		const posterLink = movieCard.querySelector(".movie-poster-link");
		const informationLink = movieCard.querySelector(".movie-card-content-link");
		const movieId = movieList.data.movies.find((movie) =>
			movie.title === movieCard.querySelector(".movie-card-heading h2").textContent
		).id;

		expect(posterLink.getAttribute("href")).toBe(`/movie/${movieId}`);
		expect(informationLink.getAttribute("href")).toBe(`/movie/${movieId}`);
		expect(posterLink.tagName).toBe("A");
		expect(informationLink.tagName).toBe("A");
		expect(informationLink.querySelector(".movie-synopsis")).toBeTruthy();
	});
});
