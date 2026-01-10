import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import chalk from 'chalk'

let data;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// console.log(__dirname)

try {
  const dataPath = path.join(__dirname, 'data.json')
  const rawData = await fs.readFile(dataPath, { encoding: 'utf8' });
  data = JSON.parse(rawData)
} catch (err) {
  console.error(err)
}

console.log(chalk.blue('# ¡Bienvenido a la CheatSheet de comandos Linux para Developers!'))

data.comandos_terminal.map(categoria => {
  const comandos = categoria.comandos
  console.log(' ')
  console.log(chalk.blue(`## ${ categoria.categoria }`))
  comandos.map(comando => {
    console.log(
      `${ chalk.green(comando.comando) } ==> ${ comando.descripcion }`
    )
  })
})

