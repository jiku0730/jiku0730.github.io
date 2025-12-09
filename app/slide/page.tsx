import SiteHeader from "../../components/site-header";

const slideEmbedUrl =
	process.env.NEXT_PUBLIC_GOOGLE_SLIDE_URL ??
	"https://docs.google.com/presentation/d/e/YOUR_EMBED_ID/embed?start=false&loop=false&delayms=3000";

const isPlaceholder = slideEmbedUrl.includes("YOUR_EMBED_ID");

export default function SlidePage() {
	return (
		<main className="relative flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -left-32 top-24 h-64 w-64 rounded-full bg-accent-500/40 blur-3xl" />
				<div className="absolute bottom-12 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
			</div>

			<SiteHeader />

			<section className="relative flex flex-1 flex-col px-6 py-24">
				<div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12">
					<div className="space-y-5">
						<h1 className="text-4xl font-semibold text-white">Slide</h1>
						<p className="text-base leading-relaxed text-slate-200">
							文字コードの基礎を整理したGoogleスライドを掲載しています。符号化方式の違いや歴史的な背景をざっと振り返りながら、普段の開発で意識しておきたいポイントをまとめました。
						</p>
					</div>
					<div className="flex flex-1 flex-col gap-6">
						<div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-xl shadow-black/30 backdrop-blur">
							{isPlaceholder ? (
								<div className="flex h-[60vh] items-center justify-center rounded-2xl border border-dashed border-slate-500/50 bg-slate-900/80 px-6 text-center text-sm text-slate-300">
									<p>
										Googleスライドの埋め込みURLが未設定です。共有設定から「埋め込みリンク」を取得し、
										<code className="mx-1 rounded bg-slate-800 px-1 py-0.5">NEXT_PUBLIC_GOOGLE_SLIDE_URL</code>
										として環境変数に登録するか、
										<code className="mx-1 rounded bg-slate-800 px-1 py-0.5">app/slide/page.tsx</code>
										のURLを差し替えてください。
									</p>
								</div>
							) : (
								<iframe
									title="Character Encoding Slide"
									src={slideEmbedUrl}
									allow="autoplay; fullscreen"
									className="h-[65vh] w-full rounded-2xl border-0"
									loading="lazy"
									allowFullScreen
								/>
							)}
						</div>
					</div>
				</div>
			</section>

			<footer className="border-t border-white/5 bg-slate-950/80 px-6 py-8">
				<div className="mx-auto flex max-w-5xl items-center justify-between text-xs text-slate-400">
					<p>&copy; {new Date().getFullYear()} Keiichi Jikuhara</p>
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
		</main>
	);
}
