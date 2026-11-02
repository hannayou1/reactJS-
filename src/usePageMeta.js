import { useEffect } from "react";

function usePageMeta(title, description) {
	useEffect(() => {
		document.title = `${title} | FRAME/FILM`;
		const descriptionTag = document.querySelector('meta[name="description"]');
		if (descriptionTag) {
			descriptionTag.setAttribute("content", description);
		}
	}, [title, description]);
}

export default usePageMeta;
