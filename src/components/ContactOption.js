import React from "react";

export default function ContactOption({ title, href }) {
	return (
		<a
			className="border-slate-600 border-2 rounded-2xl p-4 hover:shadow-2xl hover:scale-105 transition-all duration-500"
			href={href}
		>
			<h2 className="text-xl text-center font-victormono font-bold">{title}</h2>
		</a>
	);
}
