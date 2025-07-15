import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA, type VitePWAOptions } from 'vite-plugin-pwa'

const ReactCompilerConfig = { target: '19' };
const manifest: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  manifest: {
    "icons": [
      {
        "src": "pwa-64x64.png",
        "sizes": "64x64",
        "type": "image/png"
      },
      {
        "src": "pwa-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "pwa-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      },
      {
        "src": "maskable-icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ]
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /^http:\/\/localhost:3010\/advie/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'api-advie-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    })
    , tsconfigPaths()
    , VitePWA(manifest)
  ],
})
