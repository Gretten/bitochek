import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [
    react(),
    visualizer({
      filename: './stats.html',  
      open: false,
    })
  ],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
},
})
