export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      return res.status(500).json({ error: 'Webhook URL not configured' });
    }
    
    return res.status(200).json({ webhookUrl });
  } catch (error) {
    console.error('Error getting webhook URL:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
