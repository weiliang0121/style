import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default [
  {
    input: "src/main.ts",
    output: {
      name: "@iaam/style",
      file: pkg.browser,
      format: "umd",
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    input: "src/main.ts",
    external: ["d3-selection"],
    plugins: [typescript()],
    output: [
      {file: pkg.main, format: "cjs"},
      {file: pkg.module, format: "esm"},
    ],
  },
];
