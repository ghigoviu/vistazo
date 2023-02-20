import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/big-view',
  css: {
    devSourcemap: true,
  },
  plugins: [vue()],
});

// https://vitejs.dev/config/