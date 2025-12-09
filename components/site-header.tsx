import Link from "next/link";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/#about", label: "About" },
	{ href: "/timeline", label: "Timeline" },
	{ href: "/focus", label: "Focus" },
	{ href: "/slide", label: "Slide" },
	{ href: "/contact", label: "Contact" }
] as const;

type SiteHeaderProps = {
	brandHref?: string;
};

export default function SiteHeader({ brandHref = "/" }: SiteHeaderProps) {
	return (
		<header className="sticky top-0 z-10 border-b border-white/5 bg-slate-900/80 backdrop-blur">
			<nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
				<Link href={brandHref as any} className="text-lg font-semibold tracking-wide text-white">
					じく / jiku
				</Link>
				<ul className="flex items-center gap-6 text-sm font-medium text-slate-200">
					{navLinks.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href as any}
								className="transition-colors hover:text-white hover:underline decoration-accent-500/60"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
