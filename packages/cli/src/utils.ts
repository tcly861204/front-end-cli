import process from 'process'
import { execSync } from 'child_process'

export const runCommand = (shell: string) => {
  try {
    execSync(shell, {
      stdio: 'inherit',
      cwd: process.cwd(),
      encoding: 'utf8',
      env: process.env,
    })
  } catch (_) {
    process.exit(1)
  }
}