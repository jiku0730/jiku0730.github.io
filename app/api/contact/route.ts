import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
	name?: string;
	email?: string;
	message?: string;
};

export async function POST(request: Request) {
	try {
		const body: ContactPayload = await request.json();
		const name = body.name?.trim();
		const email = body.email?.trim();
		const message = body.message?.trim();

		if (!name || !email || !message) {
			return NextResponse.json({ error: "必須項目が不足しています。" }, { status: 400 });
		}

		const gmailUser = process.env.GMAIL_USER;
		const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
		const contactReceiver = process.env.CONTACT_RECEIVER;

		if (!gmailUser || !gmailAppPassword || !contactReceiver) {
			console.error("メール送信に必要な環境変数(GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_RECEIVER)が不足しています。");
			return NextResponse.json(
				{ error: "メール送信設定が完了していません。管理者にお問い合わせください。" },
				{ status: 500 }
			);
		}

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: gmailUser,
				pass: gmailAppPassword
			}
		});

		await transporter.sendMail({
			from: `Portfolio Contact <${gmailUser}>`,
			replyTo: `${name} <${email}>`,
			to: contactReceiver,
			subject: `Portfolio contact from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
			html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, "<br />")}</p>`
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("contact form error", error);
		return NextResponse.json(
			{ error: "予期せぬエラーが発生しました。時間を置いて再度お試しください。" },
			{ status: 500 }
		);
	}
}
