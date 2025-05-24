import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import express from "express";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from attached_assets for images and videos
  const assetsPath = path.resolve(process.cwd(), 'attached_assets');
  app.use('/assets', express.static(assetsPath, {
    setHeaders: (res, path) => {
      if (path.endsWith('.mp4')) {
        res.setHeader('Content-Type', 'video/mp4');
      }
      if (path.endsWith('.jpeg') || path.endsWith('.jpg')) {
        res.setHeader('Content-Type', 'image/jpeg');
      }
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  }));

  // API route for contact form submissions (if needed in the future)
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Here you could save contact form submissions to storage
      // For now, just return success
      res.json({ 
        success: true, 
        message: "Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}
