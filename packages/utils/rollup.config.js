import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: './index.ts',
  output: [
    {
      format: 'esm',
      dir: 'dist',
      exports: undefined,
      preserveModules: true,
      preserveModulesRoot: '.',
      sourcemap: true,
      entryFileNames: '[name].js',
    },
    {
      format: 'cjs',
      dir: 'dist',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: '.',
      sourcemap: true,
      entryFileNames: '[name].cjs',
    },
  ],
  plugins: [
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    commonjs(),
    typescript(),
    esbuild({
      sourceMap: true,
      target: 'esnext',
    }),
  ],
};
