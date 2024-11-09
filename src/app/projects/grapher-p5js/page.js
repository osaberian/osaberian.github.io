"use client";
import React from "react";
import MainTitle from "@/components/MainTitle";
import Image from "next/image";

import grapherThumbnail from "../../../../public/images/grapher-p5js-thumbnail.png";
import ScreenSection from "@/components/ScreenSection";
import ScrollButton from "@/components/ScrollButton";
import Seperator from "@/components/Seperator";
import LinkButton from "@/components/LinkButton";
import Navigator from "@/components/Navigator";

export default function Page() {
	return (
		<main>
			<Navigator />
			<section className="flex justify-centecr items-center w-full h-screen">
				<Image
					src={grapherThumbnail}
					className="absolute -z-20 w-full h-full object-cover"
					alt=""
				/>
				<div className="flex w-full h-full bg-black bg-opacity-80 justify-evenly items-center flex-col">
					<MainTitle title="Grapher p5.js" />
					<div className="flex gap-8 justify-center items-center flex-col md:flex-row">
						<ScrollButton
							to="details"
							displayText="SEE PROJECT DETAILS"
							icon="down-arrow"
						/>
						<LinkButton
							href="https://github.com/osaberian/grapher-p5js"
							text="OPEN GITHUB REPO"
							icon="github"
						/>
						<LinkButton
							href="https://osaberian.github.io/grapher-p5js/"
							text="OPEN PROJECT"
							icon="open"
						/>
					</div>
				</div>
			</section>
			<Seperator />
			<ScreenSection name="details">
				<div className="p-20">
					<p className="text-lg md:text-xl font-victormono text-center">
						A simple graphing app made in p5.js, with options to graph up to
						three functions at once.
					</p>
				</div>
			</ScreenSection>
		</main>
	);
}
