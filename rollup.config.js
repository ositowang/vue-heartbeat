import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
export default {
  input: "src/heartbeat/index.js",
  output: {
    name: "HeartBeat",
    exports: "named"
  },
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble()
  ]
};
