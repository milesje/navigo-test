import rollupReplace from '@rollup/plugin-replace';
import { fromRollup } from '@web/dev-server-rollup';
/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');
const replace = fromRollup(rollupReplace);

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: '/',
  watch: !hmr,

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  appIndex: 'index.html',

  /** Confgure bare import resolve plugin */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },

  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],

  // See documentation for all available options
});
