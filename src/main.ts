#!/usr/bin/env node
import process from 'process'
import commander from 'commander'
import { execCommand, getCommandArgs, getPackageJson } from './utils'
const program = new commander.Command()
const { name, version } = getPackageJson()
program
  .name(name)
  .description('🚀 前端超级脚手架工具集')
program
  .option('-v, --version', '查看版本号')
  .option('-h, --help', '查看帮助')
  .action((args) => {
    if (args.version) {
      console.log(`v${version}`)
    } else if (args.help) {
      program.help()
    }
  })
program
  .command('vite [options]')
  .description('创建vite项目')
  .action(() => {
    const args = getCommandArgs('vite')
    if (args.length < 1) {
      execCommand('npm create vite@latest')
    } else {
      execCommand('npm create vite@latest ' + args.join(' '))
    }
  })
program
  .command('vue')
  .description('创建vue项目')
  .action(() => {
    const args = getCommandArgs('vue')
    if (args.length < 1) {
      execCommand('npx create-vue-app')
    } else {
      execCommand('npx create-vue-app ' + args.join(' '))
    }
  })
program
  .command('react')
  .description('创建react项目')
  .action(() => {
    const args = getCommandArgs('react')
    if (args.length < 1) {
      execCommand('npx create-react-app')
    } else {
      execCommand('npx create-react-app ' + args.join(' '))
    }
  })
program
  .command('angular')
  .description('创建angular项目')
  .action(() => {
    const args = getCommandArgs('angular')
    if (args.length < 1) {
      execCommand('npx create-angular-app')
    } else {
      execCommand('npx create-angular-app ' + args.join(' '))
    }
  })
program
  .command('nuxt')
  .description('创建nuxt项目')
  .action(() => {
    const args = getCommandArgs('nuxt')
    if (args.length < 1) {
      execCommand('npx create-nuxt-app')
    } else {
      execCommand('npx create-nuxt-app ' + args.join(' '))
    }
  })
program
  .command('next')
  .description('创建next项目')
  .action(() => {
    const args = getCommandArgs('next')
    if (args.length < 1) {
      execCommand('npx create-next-app')
    } else {
      execCommand('npx create-next-app ' + args.join(' '))
    }
  })
program.command('trao')
  .description('创建trao项目')
  .action(() => {
    const args = getCommandArgs('trao')
    if (args.length < 1) {
      execCommand('npx @tarojs/cli@latest init')
    } else {
      execCommand('npx @tarojs/cli@latest init ' + args.join(' '))
    }
  })
program.parse(process.argv)