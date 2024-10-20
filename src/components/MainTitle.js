import React from "react";

export default function MainTitle({ title }) {
	return (
		<h1 className="font-sixtyfour text-5xl md:text-8xl lg:text-9xl mb-10">
			{title}
		</h1>
	);
}
