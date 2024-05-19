#!/usr/bin/env node
import process from 'process'
import commander from 'commander'
import { runCommand } from './utils'
const program = new commander.Command()
program
  .name('fed-cli')
  .description('🚀 前端超级脚手架工具集')
program.option('-v, --version', '查看版本号').action(() => {
  console.log('v1.0.0')
})
program.option('-h, --help', '查看帮助').action(() => {
  program.help()
})
program
  .command('vite')
  .description('创建vite项目')
  .action(() => {
    runCommand('npm create vite@latest')
  })
program.command('trao')
  .description('创建trao项目')
  .action(() => {
    runCommand('npx @tarojs/cli@latest init')
  })
program.parse(process.argv)