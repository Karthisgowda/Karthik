#!/usr/bin/env node

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

async function buildForGitHubPages() {
  console.log('🚀 Building portfolio for GitHub Pages...');
  
  // Set environment variable for GitHub Pages
  process.env.NODE_ENV = 'production';
  
  // Run vite build
  const buildProcess = spawn('npx', ['vite', 'build'], {
    stdio: 'inherit',
    cwd: __dirname
  });
  
  buildProcess.on('close', (code) => {
    if (code !== 0) {
      console.error('❌ Build failed');
      process.exit(1);
    }
    
    console.log('✅ Build completed successfully!');
    console.log('📁 Files are ready in dist/public folder');
    console.log('🌐 Ready for GitHub Pages deployment!');
  });
}

buildForGitHubPages();