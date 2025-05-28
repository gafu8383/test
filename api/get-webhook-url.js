export default function handler(req, res) {
  // CORSヘッダーを設定
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  try {
    // 環境変数からWebhook URLを取得
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      return res.status(500).json({ error: 'Webhook URL not configured' });
    }
    
    // クライアントにWebhook URLを返す
    return res.status(200).json({ webhookUrl });
  } catch (error) {
    console.error('Error getting webhook URL:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
