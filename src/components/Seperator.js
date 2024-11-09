import React from "react";

export default function Seperator({ color = "black", noMargin = false }) {
	return (
		<hr
			className={`border-1 border-${color} ` + (noMargin ? "mb-0" : "mb-28")}
		/>
	);
}
