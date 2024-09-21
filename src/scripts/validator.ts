import { execSync } from 'node:child_process';
import { readdirSync } from 'node:fs';

const ignoreTargetFileNames: string[] = ['biome.json', 'package.json', 'tsconfig.json'] as const satisfies string[];

const fileIsIgnoreTarget = (file: string): boolean =>
  !(file.endsWith('.json') || file.endsWith('.json5')) || ignoreTargetFileNames.includes(file);

const validateConfig = (): void => {
  const files: string[] = readdirSync('.').filter((file) => !fileIsIgnoreTarget(file));
  const errorFiles: string[] = [];

  for (const file of files) {
    try {
      const result = execSync(`pnpm --package=renovate dlx renovate-config-validator --strict ${file}`);
      console.info(result.toString());
    } catch (error) {
      // biome-ignore lint/suspicious/noExplicitAny: renovate error output is not typed
      console.error((error as any).output.toString());
      errorFiles.push(file);
    }
  }

  if (errorFiles.length > 0) {
    process.exit(1);
  }
};

validateConfig();
