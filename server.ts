import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Paystack Redirect
  app.get('/api/pay/paystack', (req, res) => {
    console.log('Redirecting to Paystack...');
    res.send(`
      <html>
        <head>
          <title>Redirecting...</title>
          <meta http-equiv="refresh" content="0;url=https://paystack.shop/pay/sovereignincomemultipler">
        </head>
        <body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #f8fafc;">
          <div style="text-align: center; padding: 2rem; background: white; border-radius: 1rem; shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
            <p style="color: #1e293b; font-weight: 600; margin-bottom: 1rem;">Redirecting to Paystack Checkout...</p>
            <p style="color: #64748b; font-size: 0.875rem;">If you are not redirected automatically, <a href="https://paystack.shop/pay/sovereignincomemultipler" style="color: #0074D9; text-decoration: underline;">click here to proceed</a>.</p>
          </div>
          <script>window.location.href="https://paystack.shop/pay/sovereignincomemultipler";</script>
        </body>
      </html>
    `);
  });

  // Selar Redirect
  app.get('/api/pay/selar', (req, res) => {
    console.log('Redirecting to Selar...');
    res.send(`
      <html>
        <head>
          <title>Redirecting...</title>
          <meta http-equiv="refresh" content="0;url=https://selar.com/sovereignincomemultiplier">
        </head>
        <body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #f8fafc;">
          <div style="text-align: center; padding: 2rem; background: white; border-radius: 1rem; shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
            <p style="color: #1e293b; font-weight: 600; margin-bottom: 1rem;">Redirecting to Selar Checkout...</p>
            <p style="color: #64748b; font-size: 0.875rem;">If you are not redirected automatically, <a href="https://selar.com/sovereignincomemultiplier" style="color: #ff6b35; text-decoration: underline;">click here to proceed</a>.</p>
          </div>
          <script>window.location.href="https://selar.com/sovereignincomemultiplier";</script>
        </body>
      </html>
    `);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
