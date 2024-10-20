import React from "react";

import SectionTitle from "./SectionTitle";

export default function ScreenSection({ name, children }) {
	return (
		<section className="flex min-h-screen flex-col">
			<SectionTitle name={name} />
			{children}
		</section>
	);
}
