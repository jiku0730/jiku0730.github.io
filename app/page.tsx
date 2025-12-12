import PageShell from "../components/page-shell";
import TypewriterText from "../components/typewriter-text";

type ContactMethod = {
	label: string;
	value: string;
	href: string;
	description: string;
	external?: boolean;
};

const contactMethods: ContactMethod[] = [
	{
		label: "Email",
		value: "kei2003730@gmail.com",
		href: "mailto:kei2003730@gmail.com",
		description: "一番確実な連絡先です。\nカジュアルな相談も歓迎しています。"
	},
	{
		label: "Github",
		value: "@jiku0730",
		href: "https://github.com/jiku0730",
		description: "取り組んだ課題をまとめています。\nコメントやPRなども受け付けています。"
	},
	{
		label: "X (Twitter)",
		value: "@jiku0730",
		href: "https://twitter.com/jiku0730",
		description: "日々の気づきや学びを発信しています。",
		external: true
	},
	{
		label: "Zenn（現在未使用）",
		value: "zenn.dev/jiku_jiku",
		href: "https://zenn.dev/jiku_jiku",
		description: "技術記事や学習メモをまとめる予定です。",
		external: true
	},
	{
		label: "Qiita",
		value: "qiita.com/jiku0730",
		href: "https://qiita.com/jiku0730",
		description: "実装テクニックや学びを共有しています。",
		external: true
	},
	{
		label: "note",
		value: "note.com/jiku0730",
		href: "https://note.com/jiku0730",
		description: "日常生活をゆるくまとめています。",
		external: true
	}
];

const aboutParagraphs = [
	"物理への好奇心から歩み出し、数式で世界を記述することの面白さに惹かれてきました。大学では量子力学や熱物理に触れ、モデル化と計算の楽しさを味わっています。",
	(
		<>
			現在は休学して42Tokyoでソフトウェア開発のスキルを磨いています。
			<span className="inline rounded bg-accent-500/80 px-2 py-0.5 text-white">博士課程で物理を深めたい夢</span>
			と
			<span className="inline rounded bg-accent-500/80 px-2 py-0.5 text-white">プロダクトで価値を届けたい夢</span>
			の間で、自分の軸を探っています。
		</>
	)
];

export default function HomePage() {
	return (
		<PageShell headerProps={{ brandHref: "#hero" }}>
			<section id="hero" className="relative flex flex-1 items-center justify-center px-6 py-24">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-sm uppercase tracking-[0.1em] text-accent-400">Physics × Software</p>
					<h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-4xl">
						<TypewriterText text="物理学と情報科学の交差点から発信します。" speed={70} />
					</h1>
					<p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
						物理を学びつつ、42Tokyoでソフトウェアの基礎を鍛えている学生です。
					</p>
				</div>
			</section>

			<section id="about" className="relative border-t border-white/5 bg-slate-950/70 px-6 py-24">
				<div className="mx-auto flex max-w-5xl flex-col gap-12 md:flex-row">
					<div className="flex-1 space-y-4">
						<h2 className="text-3xl font-semibold text-white">About</h2>
						{aboutParagraphs.map((paragraph, index) => (
							<p key={index} className="text-base leading-relaxed text-slate-200">
								{paragraph}
							</p>
						))}
					</div>
					<div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/35 backdrop-blur">
						<h3 className="text-lg font-semibold text-white">Skill Highlights</h3>
						<dl className="mt-3 space-y-2 text-base text-slate-200">
							<div className="flex items-start justify-between gap-3">
								<dt className="text-base font-medium">Languages</dt>
								<dd className="text-right text-base text-slate-300">C, (C++), (Python), MATLAB</dd>
							</div>
							<div className="flex items-start justify-between gap-3">
								<dt className="text-base font-medium">Tools</dt>
								<dd className="text-right text-base text-slate-300">Git, Github, GitHub Actions(CI, CD), LaTeX</dd>
							</div>
							<div className="flex items-start justify-between gap-3">
								<dt className="text-base font-medium">Interests</dt>
								<dd className="text-right text-base text-slate-300">物理シミュレーション, 量子コンピュータ, 教育系事業</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			<section id="contact" className="relative border-t border-white/5 bg-slate-950/80 px-6 py-24">
				<div className="mx-auto max-w-5xl">
					<div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
						<div className="space-y-4">
							<h2 className="text-3xl font-semibold text-white">Contact</h2>
							<p className="mt-4 text-base leading-relaxed text-slate-200">
								プロジェクトのお誘い、学習コミュニティでの輪講、進路の相談など、気軽にご連絡ください。
							</p>

						</div>
					</div>
					<div className="mt-10 grid gap-6 md:grid-cols-3">
						{contactMethods.map((method) => (
							<article
								key={method.label}
								className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/30 transition hover:border-accent-500/60"
							>
								<div>
									<h3 className="text-lg font-semibold text-white">{method.label}</h3>
									<p className="mt-2 text-sm leading-relaxed text-slate-200 whitespace-pre-line">{method.description}</p>
								</div>
								<a
									href={method.href}
									target={method.external ? "_blank" : undefined}
									rel={method.external ? "noreferrer" : undefined}
									className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-400 transition hover:text-accent-500"
								>
									{method.value}
									<span aria-hidden>→</span>
								</a>
							</article>
						))}
					</div>
				</div>
			</section>

		</PageShell>
	);
}
