import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/TheStoryMaker3/', // <-- your repo name here
  plugins: [react(), tailwindcss()],
})
