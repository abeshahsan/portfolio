import { useCallback, useEffect } from "react";

/**
 * Hook for smooth scrolling to sections with route updates
 * Implements professional scroll behavior with easing
 */
export const useSmoothScroll = () => {
	const scrollToSection = useCallback((targetId: string) => {
		const element = document.getElementById(targetId);
		if (!element) return;

		// Update URL without triggering navigation
		window.history.pushState(null, "", `#${targetId}`);

		// Use smooth scroll with custom easing
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}, []);

	const handleNavClick = useCallback(
		(e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const link = target.closest("a[href^='#']") as HTMLAnchorElement;

			if (!link) return;

			const href = link.getAttribute("href");
			if (!href?.startsWith("#")) return;

			e.preventDefault();
			const targetId = href.slice(1);
			scrollToSection(targetId);
		},
		[scrollToSection]
	);

	useEffect(() => {
		document.addEventListener("click", handleNavClick);
		return () => document.removeEventListener("click", handleNavClick);
	}, [handleNavClick]);

	return { scrollToSection };
};
