import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { SubttleShapes } from "@/components/subttle-shapes";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Yassine Mosleh | Développeur Créatif",
	description: "Portfolio de Yassine Mosleh, développeur logiciel full stack",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex min-h-screen flex-col">
						<SubttleShapes />
						<Header />
						<main className="flex-1">
							<PageTransition>{children}</PageTransition>
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
