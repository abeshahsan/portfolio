import { useEffect } from "react";

interface DocumentHeadOptions {
	title: string;
	description: string;
	image: string;
	url: string;
}

const META_SELECTORS: Array<{
	selector: string;
	attribute: "content";
	value: (options: DocumentHeadOptions) => string;
}> = [
	{
		selector: 'meta[name="description"]',
		attribute: "content",
		value: (o) => o.description,
	},
	{
		selector: 'meta[property="og:title"]',
		attribute: "content",
		value: (o) => o.title,
	},
	{
		selector: 'meta[property="og:description"]',
		attribute: "content",
		value: (o) => o.description,
	},
	{
		selector: 'meta[property="og:image"]',
		attribute: "content",
		value: (o) => o.image,
	},
	{
		selector: 'meta[property="og:url"]',
		attribute: "content",
		value: (o) => o.url,
	},
	{
		selector: 'meta[name="twitter:title"]',
		attribute: "content",
		value: (o) => o.title,
	},
	{
		selector: 'meta[name="twitter:description"]',
		attribute: "content",
		value: (o) => o.description,
	},
	{
		selector: 'meta[name="twitter:image"]',
		attribute: "content",
		value: (o) => o.image,
	},
];

export function useDocumentHead(options: DocumentHeadOptions) {
	const { title, description, image, url } = options;
	useEffect(() => {
		if (typeof document === "undefined") return undefined;
		document.title = title;

		for (const meta of META_SELECTORS) {
			const element = document.head.querySelector<HTMLMetaElement>(meta.selector);
			if (element) {
				element.setAttribute(meta.attribute, meta.value({ title, description, image, url }));
			}
		}
	}, [title, description, image, url]);
}

