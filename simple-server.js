import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Serve static files
app.use(express.static('.'));
app.use('/attached_assets', express.static('attached_assets'));

// API routes
app.use(express.json());

app.post('/api/contact', (req, res) => {
  res.json({ 
    success: true, 
    message: "Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden." 
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Catch all for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 3001;
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server läuft auf Port ${port}`);
});