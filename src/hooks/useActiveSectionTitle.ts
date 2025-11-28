import { useEffect, useState } from "react";

interface SectionConfig {
	id: string;
	title: string;
}

export function useActiveSectionTitle(sections: SectionConfig[], fallbackTitle: string) {
	const [currentTitle, setCurrentTitle] = useState(fallbackTitle);

	useEffect(() => {
		const targets = sections
			.map((section) => document.getElementById(section.id))
			.filter((element): element is HTMLElement => Boolean(element));

		if (!targets.length) return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible[0]) {
					const match = sections.find((section) => section.id === visible[0].target.id);
					if (match) {
						setCurrentTitle(match.title);
					}
				}
			},
			{ threshold: [0.3, 0.6, 0.9] }
		);

		for (const element of targets) {
			observer.observe(element);
		}

		return () => observer.disconnect();
	}, [sections, fallbackTitle]);

	return currentTitle;
}

