import process from 'node:process'
import { execSync } from 'child_process'
import fs from 'node:fs'
import path from 'node:path'

export const execCommand = (shell: string) => {
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

export const getCommandArgs = (command: string) => {
  const index = process.argv.indexOf(command)
  const args = process.argv.slice(index + 1)
  return args
}

export const getPackageJson = () => {
  const packageJson = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')
  return JSON.parse(packageJson)
}