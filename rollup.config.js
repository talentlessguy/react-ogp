import ts from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.tsx',
  output: [
    {
      dir: 'dist',
      format: 'esm'
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs'
    }
  ],
  plugins: [ts(), terser()],
  external: ['react']
}
