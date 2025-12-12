import { useEffect, useState } from "react";

/**
 * Hook to track which section is currently in view
 * Updates the URL hash as user scrolls through sections
 */
export const useScrollSpy = (sectionIds: string[], offset = 100) => {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const handleScroll = () => {
			// Get current scroll position
			const scrollPosition = window.scrollY + offset;

			// Find which section is currently in view
			let currentSection = "";

			for (const sectionId of sectionIds) {
				const element = document.getElementById(sectionId);
				if (!element) continue;

				const { top, bottom } = element.getBoundingClientRect();
				const elementTop = top + window.scrollY;
				const elementBottom = bottom + window.scrollY;

				// Check if this section is in view
				if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
					currentSection = sectionId;
					break;
				}
			}

			// Update active section and URL if changed
			if (currentSection && currentSection !== activeSection) {
				setActiveSection(currentSection);
				// Update URL without scrolling or reloading
				window.history.replaceState(null, "", `#${currentSection}`);
			}
		};

		// Throttle scroll events for performance
		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		handleScroll(); // Check initial position

		return () => window.removeEventListener("scroll", onScroll);
	}, [sectionIds, activeSection, offset]);

	return activeSection;
};
