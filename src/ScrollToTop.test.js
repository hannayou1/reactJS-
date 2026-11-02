import { fireEvent, render, screen } from "@testing-library/react";
import { Link, MemoryRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

describe("ScrollToTop", () => {
	beforeEach(() => {
		window.scrollTo = jest.fn();
	});

	test("returns to the top when the route changes", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<ScrollToTop />
				<Link to="/movie/1">작품 보기</Link>
				<Routes>
					<Route path="/" element={<p>영화 목록</p>} />
					<Route path="/movie/:id" element={<p>영화 상세</p>} />
				</Routes>
			</MemoryRouter>
		);

		fireEvent.click(screen.getByRole("link", { name: "작품 보기" }));

		expect(screen.getByText("영화 상세")).toBeTruthy();
		expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
	});
});
