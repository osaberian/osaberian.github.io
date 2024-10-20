import React from "react";

import { Link } from "react-scroll";

export default function ScrollButton({ to }) {
	return (
		<Link
			to={to}
			offset={-50}
			smooth
			duration={1000}
			className="flex cursor-pointer text-foregroundDark text-lg font-victormono bg-slate-600 p-4 rounded-lg hover:bg-slate-500 transition-all duration-200 w-32 justify-center items-center"
		>
			{to.toUpperCase()}
		</Link>
	);
}
