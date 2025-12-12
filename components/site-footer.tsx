export default function SiteFooter() {
	return (
		<footer className="border-t border-white/5 bg-slate-950/80 px-6 py-8">
			<div className="mx-auto flex max-w-5xl items-center justify-between text-xs text-slate-400">
				<p>&copy; {new Date().getFullYear()} jiku</p>
				<a
					href="https://github.com/jiku0730"
					target="_blank"
					rel="noreferrer"
					className="transition hover:text-slate-200"
				>
					GitHub
				</a>
			</div>
		</footer>
	);
}
