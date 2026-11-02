import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

describe("App navigation", () => {
	beforeEach(() => {
		window.scrollTo = jest.fn();
	});

	test("navigates to the service introduction without a full-page reload", () => {
		render(<App />);

		const navigation = within(screen.getByRole("navigation", { name: "주요 메뉴" }));
		const aboutLink = navigation.getByRole("link", { name: "서비스 소개" });
		const brandLink = screen.getByRole("link", { name: "FRAME/FILM 홈" });

		expect(aboutLink.getAttribute("href")).toBe("/about");
		expect(brandLink.getAttribute("href")).toBe("/");

		fireEvent.click(aboutLink);

		expect(screen.getByRole("heading", { name: "영화 정보를 한눈에, 기준은 투명하게" })).toBeTruthy();
	});
});
