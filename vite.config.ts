import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import presetEnv from 'postcss-preset-env';
import legacy from '@vitejs/plugin-legacy';
import UnoCSS from 'unocss/vite';
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需导入element-plus
    autoImport({
      resolvers: [ElementPlusResolver()],
    }),
    components({
      resolvers: [ElementPlusResolver()],
    }),
    // 添加polyfill
    legacy(),
    UnoCSS({
      presets: [
        presetIcons()
      ]
    }),
  ],
  define: {
    __VUE_OPTIONS_API__: false,
  },
  build: {
    target: 'es6',
    rollupOptions: {
      output: {
        manualChunks(id, { getModuleInfo }) {
          // 这里可以按路由拆分
          if (id.includes('src/views/home')) {
            return 'home';
          }
          if (id.includes('src/views/main-data')) {
            return 'main-data';
          }
          if (id.includes('src/views/area-management')) {
            return 'main-data';
          }
          if (id.includes('src/views/action-management')) {
            return 'main-data';
          }
          // 打包依赖
          if (id.includes('node_modules')) {
            return 'vendor';
          }
    
          const reg = /(.*)\/src\/components\/(.*)/
          if (reg.test(id)) {
            const importersLen = getModuleInfo(id)?.importers?.length as number;
            // 被多处引用
            if (importersLen > 1) {
              return 'common';
            }
          }
        }
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        // 处理css兼容性
        presetEnv(),
      ]
    }
  },

})
