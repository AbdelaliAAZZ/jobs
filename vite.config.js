import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  port: 3000, 
  proxy: {
    '/api':{
      target : 'http://localhost:8000',
      changeOrigin : true , 
      rewrite : (path) => path.replace(
        /^\/api/,''
      )  
    }
    // we do this to use api/jobs istead of http://localhost:8000/jobs
  }
  },
})
