import { defineConfig } from "vite";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  base: "/test/",
  plugins: [
    babel({
      babelHelpers: "runtime",
      exclude: ["node_modules/**"],
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-transform-runtime"],
    }),
  ],
});
