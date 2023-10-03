import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { CompileOptions } from "svelte/compiler";

const compilerOptions: CompileOptions = {
  css: "injected",
};

export default defineConfig({
  build: {
    // lib: {
    //   entry: "src/main.ts",
    //   name: "svelte-vite",
    // },
  },
  plugins: [
    svelte({
      // emitCss: false,
      // compilerOptions,
    }),
  ],
});
