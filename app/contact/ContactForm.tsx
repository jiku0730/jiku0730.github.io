'use client';

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
	const [status, setStatus] = useState<FormStatus>("idle");
	const [errorMessage, setErrorMessage] = useState<string>("");

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);
		const name = formData.get("name")?.toString().trim();
		const email = formData.get("email")?.toString().trim();
		const message = formData.get("message")?.toString().trim();

		if (!name || !email || !message) {
			setErrorMessage("お手数ですが、すべての項目をご入力ください。");
			setStatus("error");
			return;
		}

		setStatus("loading");
		setErrorMessage("");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, message })
			});

			if (!response.ok) {
				const data = await response.json().catch(() => ({}));
				setErrorMessage(data?.error ?? "送信に失敗しました。しばらくしてからもう一度お試しください。");
				setStatus("error");
				return;
			}

			setStatus("success");
			form.reset();
		} catch (error) {
			console.error(error);
			setErrorMessage("通信に失敗しました。時間を置いて再度お試しください。");
			setStatus("error");
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid gap-6 md:grid-cols-2">
				<label className="flex flex-col gap-2 text-sm text-slate-200">
					<span className="font-medium text-white">お名前</span>
					<input
						type="text"
						name="name"
						required
						placeholder="例: 時空 太郎"
						className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
					/>
				</label>
				<label className="flex flex-col gap-2 text-sm text-slate-200">
					<span className="font-medium text-white">メールアドレス</span>
					<input
						type="email"
						name="email"
						required
						placeholder="you@example.com"
						className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
					/>
				</label>
			</div>
			<label className="flex flex-col gap-2 text-sm text-slate-200">
				<span className="font-medium text-white">メッセージ</span>
				<textarea
					name="message"
					required
					rows={6}
					placeholder="ご相談内容や自己紹介などをご記入ください。"
					className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
				/>
			</label>
			<button
				type="submit"
				disabled={status === "loading"}
				className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
			>
				{status === "loading" ? "送信中..." : "送信する"}
			</button>
			{status === "success" && (
				<p className="text-sm text-emerald-300">送信が完了しました。折り返しご連絡いたします。</p>
			)}
			{status === "error" && errorMessage && (
				<p className="text-sm text-rose-300">{errorMessage}</p>
			)}
		</form>
	);
}
