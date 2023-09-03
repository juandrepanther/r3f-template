import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  const processEnvValues = {
    'process.env': Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      }
    }, {}),
  }
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      host: false,
    },
    define: processEnvValues,
  }
})
