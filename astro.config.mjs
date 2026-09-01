import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import starpod from 'starpod';

import starpodConfig from './starpod.config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      formats: ['image/avif'],
      minimumCacheTTL: 3600,
      remotePatterns: [
        {
          protocol: 'https'
        },
        {
          protocol: 'http'
        }
      ],
      sizes: [160, 320, 640, 1280]
    },
    webAnalytics: {
      enabled: true
    }
  }),
  # site: 'https://whiskey.fm',
  integrations: [starpod(starpodConfig, { database: true })],
  }
});
