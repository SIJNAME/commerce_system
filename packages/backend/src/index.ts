import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => {
  res.json({ success: true, service: 'backend', message: 'Live Commerce API is running' });
});

app.use('/api', (_req, res) => {
  res.status(501).json({
    success: false,
    error: {
      code: 'NOT_IMPLEMENTED',
      message: 'API routes are scaffolded and will be implemented by phase tasks.'
    }
  });
});

app.listen(port, () => {
  console.log(`✅ Backend running on http://localhost:${port}`);
});
