import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  build: {
    outDir: "build",
  },
  plugins: [tsconfigPaths(), react()],
  css: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
