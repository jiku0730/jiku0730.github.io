import PageShell from "../../components/page-shell";
import ContactForm from "./ContactForm";

export default function ContactPage() {
	return (
		<PageShell>
			<section className="relative flex flex-1 flex-col px-6 py-24">
				<div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
					<div className="space-y-6">
						<h1 className="text-4xl font-semibold text-white">Contact</h1>
						<p className="text-base leading-relaxed text-slate-200">
							プロジェクトのお誘い、共同研究のご相談、学習コミュニティでの輪講など、お気軽にご連絡ください。
						</p>
						<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30 backdrop-blur">
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
		</PageShell>
	);
}
