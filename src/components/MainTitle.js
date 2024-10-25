import React from "react";

export default function MainTitle({ title }) {
	return (
		<h1 className="font-sixtyfour text-4xl md:text-7xl lg:text-9xl mb-10 text-center tracking-tighter">
			{title}
		</h1>
	);
}
