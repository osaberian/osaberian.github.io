import React from "react";

export default function SiteTitle({ opened }) {
	return (
		<>
			<h1
				className={
					"transition-all duration-500 font-sixtyfour opacity-0 text-base tracking-tighter lg:tracking-wider" +
					(opened ? "" : " lg:opacity-100")
				}
			>
				OS
			</h1>
			<h1
				className={
					"transition-all duration-500 font-sixtyfour text-base tracking-tighter lg:tracking-wider" +
					(opened ? " opacity-100" : " opacity-0")
				}
			>
				OMEED SABERIAN
			</h1>
		</>
	);
}
