import PageShell from "../../components/page-shell";

type TimelineEvent = {
	period: string;
	title: string;
	description: string | string[];
};

const timeline: TimelineEvent[] = [
	{
		period: "〜2021",
		title: "京都私立 洛南高等学校",
		description: [
			"競技かるたを高校1年4月から始めました。集中力と瞬発力を磨きながら3年間楽しみました。",
			"理系と文系どちらに進むか大変迷いましたが、科学が持つ社会への影響力に惹かれて理系を志望しました。",
			"高校生の頃から漠然と東京やアメリカなどに憧れを感じていました。",
			"将来は海外で働いてみたいなぁと考えるようになり、まずは日本の中心である東京で経験を積むことが大切だと思い上京を決意しました。",
			"高校2年の秋から東京大学合格を目標に据え、受験勉強に本格的に打ち込みましたが、あと一歩届きませんでした。",
			"しかし、その挑戦の過程で物理と数学の奥深さを感じ、将来学者になりたいと思いました。"
		]
	},
	{
		period: "2022",
		title: "浪人生活",
		description: [
			"毎日予備校と自宅を往復し、数学・物理の学習を地道に積み重ねる日々を送りました。",
			"一問一問基礎から問題を解きほぐすたびに数学・物理の奥深さに引き込まれ、探究心と粘り強さが少しずつ身についていくのを実感しました。",
			"再び東京大学を受験しましたが結果は不合格で、悔しさと向き合いながら次の進路を考え直し慶應義塾大学に進学することにしました。",
			"予備校のクラスを通じて、高校では出会えなかった多様な仲間と交流できました。大変有意義で挑戦を続ける力につながったと感じています。"
		]
	},
	{
		period: "2023",
		title: "慶應義塾大学 理工学部 1年 学門B",
		description: [
			"2023年4月に上京して慶應義塾大学 理工学部 学門Bに入学しました。",
			"春学期は本当にグレていました。麻雀・ポーカー・ダーツ・カラオケしかしておらず、成績が大変なことになっていました。",
			"このままではまずいと思い、夏季休暇にはKorea Universityへ短期留学し、熱意ある方々と沢山話すことができました。大学生活の転機はここだったと自信を持って言えます。",
			"また留学先が同じだった先輩から競技かるたサークルを勧められ、夏から競技かるたを再スタートしました。"
		]
	},
	{
		period: "2024",
		title: "慶應義塾大学 理工学部 2年 物理情報工学科",
		description: [
			"2024年度春学期は物理情報工学科の専門科目に腰を据えて学び、物理工学への理解を深めました。",
			"2024年8月はドイツのRWTH Aachen Universityに3週間弱滞在し、現地での理系の講義や実験に参加しました。留学終了後に、1人でヨーロッパを旅しましたが、非常にさみしかったです。",
			"2024年度秋学期は物理情報工学科に加えて、数理科学科・情報工学科・物理学科の専門授業も並行して受講しました。キャパオーバーすぎて過労死するかと思いましたがめちゃくちゃ楽しかったです。",
			"2025年度2月にはStanford Universityに3週間ほどの短期留学し、現地学生と交流を深めました。"
		]
	},
	{
		period: "2025",
		title: "休学 & 42Tokyo",
		description: [
			"2025年3月の42Tokyo入学試験（Piscine）を受験し、首席で合格することが出来ました。",
			"Piscineで出会った刺激的な仲間の影響で、1年間の休学を決意しました。",
			"42Tokyoでは、ピアラーニングと課題ベースの学習を通じてソフトウェアエンジニアリングの視点を少しずつ学んでいます。",
			"現在はC言語の学習を通じて、アルゴリズムや低レイヤーの分野に没頭しながら、物理との接続点を模索中です。"
		]
	}
];

export default function TimelinePage() {
	return (
		<PageShell>
			<section className="relative flex flex-1 flex-col px-6 py-24">
				<div className="mx-auto w-full max-w-4xl">
					<h1 className="text-4xl font-semibold text-white">Timeline</h1>
					<p className="mt-4 text-base leading-relaxed text-slate-200">
						物理と情報のあいだで積み重ねてきた歩みを、時間の流れに沿ってまとめました。
					</p>
					<div className="relative mt-12 border-l border-white/10 pl-6">
						{timeline.map((item) => (
							<div key={item.title} className="relative pb-12 last:pb-0">
								<p className="text-xs uppercase tracking-wider text-accent-400">{item.period}</p>
								<h2 className="mt-1 text-2xl font-semibold text-white">{item.title}</h2>
								{Array.isArray(item.description) ? (
									item.description.map((sentence, index) => (
										<p
											key={`${item.title}-${index}`}
											className={`text-sm leading-relaxed text-slate-200 ${index === 0 ? "mt-2" : "mt-1"}`}
										>
											{sentence}
										</p>
									))
								) : (
									<p className="mt-2 text-sm leading-relaxed text-slate-200">{item.description}</p>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</PageShell>
	);
}
