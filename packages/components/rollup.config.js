import { readdirSync } from 'fs';
import { resolve } from 'path';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

function getInput(dir) {
  const files = readdirSync(dir);
  return files
    .filter((file) => file.endsWith('.ts'))
    .map((file) => resolve(dir, file));
}

export default {
  input: getInput('./src'),
  output: [
    {
      format: 'esm',
      dir: 'dist/es',
      exports: undefined,
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: '[name].mjs',
    },
    {
      format: 'cjs',
      dir: 'dist/lib',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: '[name].js',
    },
  ],
  plugins: [
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    commonjs(),
    json(),
    postcss({
      extract: true, // 输出单独的 CSS 文件
      modules: false, // 禁用 CSS 模块化
      use: ['sass'], // 使用 Sass 处理样式
      minimize: true, // 压缩 CSS
    }),
    typescript(),
    esbuild({
      sourceMap: true,
      target: 'esnext',
    }),
  ],
  external: ['react', 'react-dom'],
};
