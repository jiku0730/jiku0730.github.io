import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSans = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto" });

export const metadata: Metadata = {
	title: "jiku's homepage",
	description: "jiku's portfolio",
	openGraph: {
		title: "jiku's homepage",
		description: "jiku's portfolio",
		type: "website",
		locale: "ja_JP"
	}
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className={`${inter.variable} ${notoSans.variable}`}>
			<body className="bg-slate-950 text-slate-50 antialiased font-sans">
				{children}
			</body>
		</html>
	);
}
