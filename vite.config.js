import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Automatically use the correct base for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/CM_Zindal/', // Must match your repo name (case-sensitive)
});
