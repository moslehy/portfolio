"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toogle";

const links = [
	{ name: "Accueil", path: "/" },
	{ name: "Profil", path: "/profil" },
	{ name: "Projets", path: "/projets" },
	{ name: "Contact", path: "/contact" },
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b py-4">
			<div className="container flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<div className="relative">
						<div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full">
							<span className="text-xl font-bold text-primary-foreground">
								Y
							</span>
						</div>
					</div>
					<span className="text-xl font-bold">
						Yass<span className="text-primary">.</span>
					</span>
				</Link>

				<nav className="hidden md:flex items-center gap-8">
					{links.map((link) => (
						<Link
							key={link.path}
							href={link.path}
							className={cn(
								"relative text-sm font-medium transition-colors hover:text-primary subtle-underline",
								pathname === link.path
									? "text-primary"
									: "text-muted-foreground",
							)}
						>
							{link.name}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-4">
					<ModeToggle />
					<div className="hidden md:block">
						<Link href="/contact">
							<Button>Me contacter</Button>
						</Link>
					</div>
					<Sheet>
						<SheetTrigger asChild className="md:hidden">
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<nav className="flex flex-col gap-4 mt-8">
								{links.map((link) => (
									<Link
										key={link.path}
										href={link.path}
										className={cn(
											"text-lg font-medium transition-colors hover:text-primary py-2",
											pathname === link.path
												? "text-primary"
												: "text-muted-foreground",
										)}
									>
										{link.name}
									</Link>
								))}
								<Link href="/contact" className="mt-4">
									<Button className="w-full">
										Me contacter
									</Button>
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
