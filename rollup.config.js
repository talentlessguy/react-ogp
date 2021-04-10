import ts from '@rollup/plugin-typescript'

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
  plugins: [ts()],
  external: ['react']
}
