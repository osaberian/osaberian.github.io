"use client";
import React from "react";

import HomeMainSection from "@/components/HomeMainSection";
import HomeProjectSection from "@/components/HomeProjectSection";
import HomeContactSection from "@/components/HomeContactSection";

export default function Home() {
	return (
		<main>
			<HomeMainSection />
			<HomeProjectSection />
			<HomeContactSection />
		</main>
	);
}
