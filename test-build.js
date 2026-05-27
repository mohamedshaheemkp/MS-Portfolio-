import { build } from 'vite';

async function runBuild() {
  try {
    await build({
      root: process.cwd(),
      logLevel: 'error',
    });
    console.log('Build successful');
  } catch (e) {
    console.error('Build failed:');
    console.error(e);
  }
}

runBuild();
