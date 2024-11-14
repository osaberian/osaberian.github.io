import React from "react";

import SectionTitle from "./SectionTitle";

export default function ScreenSection({ name, children, ...props }) {
	return (
		<section className="flex min-h-screen flex-col" {...props}>
			<SectionTitle name={name} />
			{children}
		</section>
	);
}
