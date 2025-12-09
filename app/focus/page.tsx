import Link from "next/link";
import SiteHeader from "../../components/site-header";

type Capability = {
	title: string;
	description: string;
	stack: string[];
};

const capabilities: Capability[] = [
	{
		title: "低レイヤーの基礎力",
		description:
			"42Tokyoの課題を通じて、メモリ管理やプロセス、ファイルI/Oなどソフトウェアを支える仕組みを実装しながら理解しています。物理で鍛えた理論思考をコードの設計と検証に活かしています。",
		stack: ["C", "Shell", "Git", "Make"]
	},
	{
		title: "数値計算とシミュレーション",
		description:
			"大学での研究と並行して、MATLABやPythonでモデル化・可視化を行い、物理現象をデータとして捉える力を磨いています。数値解の安定性や誤差評価を意識した実装が得意です。",
		stack: ["MATLAB", "Python", "NumPy", "Matplotlib"]
	},
	{
		title: "学習環境づくり",
		description:
			"ピアラーニングの文化に影響を受け、情報共有のためのドキュメント整備や自動化にも取り組んできました。チームで素早く学び合う仕組みを作ることに関心があります。",
		stack: ["GitHub Actions", "Notion", "Discord", "Figma"]
	}
];

export default function FocusPage() {
	return (
		<main className="relative flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -left-32 top-24 h-64 w-64 rounded-full bg-accent-500/40 blur-3xl" />
				<div className="absolute bottom-12 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
			</div>

			<SiteHeader />

			<section className="relative flex flex-1 flex-col px-6 py-24">
				<div className="mx-auto w-full max-w-5xl space-y-12">
					<div className="space-y-5">
						<h1 className="text-4xl font-semibold text-white">Focus</h1>
						<p className="text-base leading-relaxed text-slate-200">
							物理で鍛えた分析力と42Tokyoで培った実装力をつなぎ、理論とソフトウェアのあいだにある課題を解くことに関心があります。
							現在注力している領域をまとめました。
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						{capabilities.map((item) => (
							<article
								key={item.title}
								className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/30 transition hover:border-accent-500/60"
							>
								<div>
									<h2 className="text-xl font-semibold text-white">{item.title}</h2>
									<p className="mt-3 text-sm leading-relaxed text-slate-200">{item.description}</p>
								</div>
								<ul className="mt-6 flex flex-wrap gap-2">
									{item.stack.map((tech) => (
										<li
											key={tech}
											className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-100"
										>
											{tech}
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
					<div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-xl shadow-black/30 backdrop-blur">
						<h2 className="text-lg font-semibold text-white">Let's Collaborate</h2>
						<p className="mt-2 leading-relaxed">
							研究・プロダクト開発・学習イベントなど、気になるテーマがあればぜひ声をかけてください。共同で取り組めるアイデアをいつも探しています。
						</p>
						<Link
							href="/contact"
							className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-400 transition hover:text-accent-500"
						>
							コンタクトページへ
							<span aria-hidden>→</span>
						</Link>
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
