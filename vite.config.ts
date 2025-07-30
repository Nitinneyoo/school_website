import { defineConfig } from 'vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Create smaller, more manageable chunks
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            if (id.includes('@tanstack')) {
              return 'router';
            }
            if (id.includes('@radix-ui')) {
              return 'ui-components';
            }
            return 'vendor';
          }
        },
        inlineDynamicImports: false,
      },
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      '@tanstack/react-router',
      '@radix-ui/react-accordion',
      '@radix-ui/react-progress',
      '@radix-ui/react-tabs'
    ],
    exclude: ['lucide-react'],
  },
  server: {
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true
    }
  },
});
