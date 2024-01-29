import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.mjs', '.js', '.json', '.ts'];

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'esm',
      dir: 'dist',
      exports: undefined,
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: '[name].js',
    },
    {
      format: 'cjs',
      dir: 'dist',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: '[name].cjs',
    },
  ],
  plugins: [
    nodeResolve({
      extensions,
    }),
    commonjs(),
    json(),
    typescript(),
    esbuild({
      sourceMap: true,
      target: 'esnext',
    }),
  ],
  external: ['lodash', 'url-join'],
};
