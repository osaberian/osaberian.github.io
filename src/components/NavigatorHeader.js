"use client";

import React from "react";

export default function NavigatorHeader({ text }) {
	return (
		<h3 className="flex font-bold text-foregroundDark text-lg font-victormono w-fit justify-center items-center">
			{text}
		</h3>
	);
}
