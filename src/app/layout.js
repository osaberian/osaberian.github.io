import localFont from "next/font/local";
import "./globals.css";

const sixtyfour = localFont({
	src: "../../public/fonts/Sixtyfour.ttf",
	variable: "--font-sixtyfour",
	weight: "100 900",
});

const victormono = localFont({
	src: "../../public/fonts/VictorMono.ttf",
	variable: "--font-victormono",
	weight: "100 900",
});

export const metadata = {
	title: "Omeed Saberian",
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
