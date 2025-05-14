import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
	return (
		<footer className="border-t bg-background/80 backdrop-blur-sm mt-20">
			<div className="container py-8 md:py-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div>
						<Link href="/" className="flex items-center gap-2">
							<div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full">
								<span className="text-xl font-bold text-primary-foreground">
									Y
								</span>
							</div>
							<span className="text-xl font-bold">
								Yass<span className="text-primary">.</span>
							</span>
						</Link>
						<p className="text-muted-foreground mt-2 max-w-xs">
							Créateur d`expériences numériques uniques et
							innovantes.
						</p>
					</div>

					<div className="flex gap-6">
						<Link
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							<Github className="h-5 w-5" />
							<span className="sr-only">GitHub</span>
						</Link>
						<Link
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							<Linkedin className="h-5 w-5" />
							<span className="sr-only">LinkedIn</span>
						</Link>
						<Link
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							<Twitter className="h-5 w-5" />
							<span className="sr-only">Twitter</span>
						</Link>
						<Link
							href="mailto:moslehyassine0@gmail.com"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							<Mail className="h-5 w-5" />
							<span className="sr-only">Email</span>
						</Link>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} Yassine Mosleh. Tous droits
						réservés.
					</p>
				</div>
			</div>
		</footer>
	);
}
