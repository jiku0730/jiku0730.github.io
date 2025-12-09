import Link from "next/link";
import ContactForm from "./ContactForm";

const navLinks: { href: string; label: string }[] = [
	{ href: "/", label: "Home" },
	{ href: "/#about", label: "About" },
	{ href: "/timeline", label: "Timeline" },
	{ href: "/focus", label: "Focus" },
	{ href: "/slide", label: "Slide" },
	{ href: "/contact", label: "Contact" }
];

type ContactChannel = {
	label: string;
	value: string;
	description: string;
	href?: string;
};

const contactMethods: ContactChannel[] = [
	{
		label: "Email",
		value: "kei2003730@gmail.com",
		description: "Gmailが最も確実です。フォームからの送信もこのアドレスに届きます。"
	},
	{
		label: "X (Twitter)",
		value: "@jiku0730",
		href: "https://twitter.com/jiku0730",
		description: "日々の気づきや42Tokyoでの学びを発信中。DMは開放しています。"
	},
	{
		label: "Zenn",
		value: "zenn.dev/jiku_jiku",
		href: "https://zenn.dev/jiku_jiku",
		description: "技術記事と学習メモをまとめています。"
	}
] as const;

export default function ContactPage() {
	return (
		<main className="relative flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -left-32 top-24 h-64 w-64 rounded-full bg-accent-500/40 blur-3xl" />
				<div className="absolute bottom-12 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
			</div>

			<header className="sticky top-0 z-10 border-b border-white/5 bg-slate-900/80 backdrop-blur">
				<nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
					<Link href="/" className="text-lg font-semibold tracking-wide text-white">
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

			<section className="relative flex flex-1 flex-col px-6 py-24">
				<div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
					<div className="space-y-6">
						<h1 className="text-4xl font-semibold text-white">Contact</h1>
						<p className="text-base leading-relaxed text-slate-200">
							プロジェクトのお誘い、共同研究のご相談、学習コミュニティでのコラボなど、お気軽にご連絡ください。
							SNSは技術発信が中心ですが、DMや返信も歓迎しています。
						</p>
						<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30 backdrop-blur">
							<h2 className="text-lg font-semibold text-white">フォームで直接送信</h2>
							<p className="mt-2 text-sm leading-relaxed text-slate-200">
								以下のフォームから送信すると、内容が直接Gmailに届きます。
								できるだけ早く折り返します。
							</p>
							<div className="mt-6">
								<ContactForm />
							</div>
						</div>
						<div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-xl shadow-black/30 backdrop-blur">
							<h2 className="text-lg font-semibold text-white">返信ポリシー</h2>
							<ul className="mt-3 list-disc space-y-2 pl-5">
								<li>平日は48時間以内の返信を目標にしています。</li>
								<li>研究・学業の状況によってはお時間をいただく場合があります。</li>
								<li>お急ぎの場合は件名に【至急】と明記いただけると助かります。</li>
							</ul>
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
