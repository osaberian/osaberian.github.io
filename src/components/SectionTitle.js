import React from "react";

import { Element } from "react-scroll";

export default function SectionTitle({ name }) {
	return (
		<Element name={name}>
			<h1 className="font-sixtyfour text-4xl md:text-6xl lg:text-7xl text-center">
				{name.toUpperCase()}
			</h1>
		</Element>
	);
}
