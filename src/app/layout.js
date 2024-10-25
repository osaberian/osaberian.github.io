import localFont from "next/font/local";
import "./globals.css";

const sixtyfour = localFont({
	src: "./fonts/Sixtyfour.ttf",
	variable: "--font-sixtyfour",
	weight: "100 900",
});

const victormono = localFont({
	src: "./fonts/VictorMono.ttf",
	variable: "--font-victormono",
	weight: "100 900",
});

export const metadata = {
	title: "OS - Home",
	description: "Omeed's portfolio website.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${sixtyfour.variable} ${victormono.variable} antialiased dark`}
			>
				{children}
			</body>
		</html>
	);
}
