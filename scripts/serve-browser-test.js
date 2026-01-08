#!/usr/bin/env node

/**
 * Simple HTTP server for browser compatibility testing
 * Serves the browser test HTML file and built assets
 */

import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const PORT = process.env.PORT || 3000;

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.map': 'application/json'
};

function getMimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'text/plain';
}

function serveFile(res, filePath, contentType) {
  try {
    if (!existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
      return;
    }
    
    const content = readFileSync(filePath);
    res.writeHead(200, { 
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    res.end(content);
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal server error: ' + error.message);
  }
}

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let filePath;
  
  console.log(`${req.method} ${url.pathname}`);
  
  // Route handling
  if (url.pathname === '/' || url.pathname === '/test') {
    // Serve the browser test HTML
    filePath = join(projectRoot, 'test', 'browser-test.html');
    serveFile(res, filePath, 'text/html');
  } else if (url.pathname.startsWith('/dist/')) {
    // Serve built files from dist directory
    const fileName = url.pathname.replace('/dist/', '');
    filePath = join(projectRoot, 'dist', fileName);
    const contentType = getMimeType(filePath);
    serveFile(res, filePath, contentType);
  } else if (url.pathname === '/package.json') {
    // Serve package.json for debugging
    filePath = join(projectRoot, 'package.json');
    serveFile(res, filePath, 'application/json');
  } else {
    // 404 for other paths
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>404 - Not Found</title></head>
      <body>
        <h1>404 - Not Found</h1>
        <p>The requested resource was not found.</p>
        <p><a href="/">Go to Browser Test</a></p>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, () => {
  console.log('🚀 REL.js Browser Test Server Started');
  console.log(`📍 Server running at: http://localhost:${PORT}`);
  console.log(`🧪 Browser test available at: http://localhost:${PORT}/test`);
  console.log('\n📋 Available endpoints:');
  console.log(`  • http://localhost:${PORT}/           - Browser test page`);
  console.log(`  • http://localhost:${PORT}/test       - Browser test page`);
  console.log(`  • http://localhost:${PORT}/dist/*     - Built assets`);
  console.log(`  • http://localhost:${PORT}/package.json - Package info`);
  console.log('\n💡 Instructions:');
  console.log('  1. Ensure you have built the project: npm run build');
  console.log('  2. Open the browser test URL in your browser');
  console.log('  3. Check the test results on the page');
  console.log('  4. Press Ctrl+C to stop the server');
  console.log('');
  
  // Check if dist directory exists
  const distPath = join(projectRoot, 'dist');
  if (!existsSync(distPath)) {
    console.log('⚠️  Warning: dist/ directory not found.');
    console.log('   Run "npm run build" to generate the required files.');
  } else {
    console.log('✅ dist/ directory found - ready for testing!');
  }
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use.`);
    console.error('   Try using a different port: PORT=3001 npm run test:browser');
  } else {
    console.error('❌ Server error:', error.message);
  }
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  server.close(() => {
    console.log('✅ Server stopped successfully.');
    process.exit(0);
  });
});