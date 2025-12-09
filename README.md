# jiku's Portfolio

Next.js 14（App Router）と Tailwind CSS で構築したポートフォリオサイトです。物理とソフトウェアの学びを紹介するトップページのほか、フォーカス分野紹介・タイムライン・問い合わせフォームを備えています。

## 機能ハイライト

- **トップページ**: ヒーロー、自己紹介、主要な連絡手段をまとめたセクション構成。
- **タイムライン** (`/timeline`): 学習・研究・留学などの歩みを年代ごとに整理。
- **フォーカス領域** (`/focus`): 現在取り組んでいるスキルセットと関心領域をカード形式で紹介。
- **コンタクトフォーム** (`/contact`): Nodemailer 経由で Gmail に直接送信。返信ポリシーを明記。
- **スライド** (`/slide`): 文字コードのGoogleスライドを埋め込み表示。環境変数で差し替え可能。

## 開発環境のセットアップ

- Node.js 18.17 以上を推奨
- パッケージマネージャー: npm

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開くと開発用サーバーが起動します。

### ビルド・検証

- `npm run build`: 本番ビルド
- `npm run start`: ビルド済みアプリの起動
- `npm run lint`: ESLint（`next/core-web-vitals`）で静的解析

## メール送信の環境変数

問い合わせフォームから Gmail に通知するため、以下の環境変数を設定してください（例: `.env.local`）。

```
GMAIL_USER=your-address@gmail.com
GMAIL_APP_PASSWORD=16文字のアプリパスワード
NEXT_PUBLIC_GOOGLE_SLIDE_URL=https://docs.google.com/presentation/d/e/.../embed?start=false&loop=false&delayms=3000
```

> Gmail のアプリパスワードは 2 段階認証を有効化した上で作成します。
> Google スライドは共有設定を「リンクを知っている全員」にして埋め込み用URLをコピーします。

## ディレクトリ構成

```
app/
	layout.tsx           ルートレイアウトとフォント設定
	globals.css          Tailwind のエントリーポイント
	page.tsx             トップページ
	focus/page.tsx       フォーカス領域ページ
	timeline/page.tsx    タイムラインページ
	slide/page.tsx       文字コードスライドページ
	contact/page.tsx     問い合わせページ
	contact/ContactForm.tsx フォームのクライアントコンポーネント
	api/contact/route.ts Nodemailer を使ったメール送信 API ルート
components/
	site-header.tsx      全ページ共通のナビゲーションヘッダー
```

設定ファイルは `tailwind.config.ts`、`postcss.config.js`、`next.config.js` に整理しており、ESLint 設定は `.eslintrc.json` を参照してください。

## デプロイメモ

- Vercel でのデプロイを想定しています。
- `.env.production` などにも同じ Gmail の環境変数を設定してください。
- カスタムドメインは Vercel の Domain 設定で管理しています。
