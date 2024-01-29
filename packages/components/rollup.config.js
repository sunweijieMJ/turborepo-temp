import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
// import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.mjs', '.js', '.json', '.ts'];
const styleExtensions = ['.css', '.scss', '.sass'];

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'esm',
      dir: 'dist/',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: '[name].js',
    },
    {
      format: 'cjs',
      dir: 'dist/',
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
      moduleDirectories: ['node_modules'],
    }),
    commonjs(),
    json(),
    postcss({
      minimize: true,
      sourceMap: true,
      extensions: styleExtensions,
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      include: ['src/**/*'],
      exclude: ['node_modules', '**/*.spec.ts'],
    }),
    // esbuild({
    //   sourceMap: true,
    //   target: 'esnext',
    // }),
    babel({
      babelHelpers: 'bundled',
      configFile: '../../babel.config.js',
    }),
  ],
  external: [
    'classnames',
    'lodash',
    'react',
    'react-dom',
    'styled-components',
    'url-join',
    'uuid',
    'video.js',
  ],
};
