import fs from 'node:fs/promises'
import chalk from 'chalk'

let data;

try {
  const rawData = await fs.readFile('./data.json', { encoding: 'utf8' });
  data = JSON.parse(rawData)
} catch (err) {
  console.error(err)
}

data.comandos_terminal.map(categoria => {
  const comandos = categoria.comandos
  console.log(chalk.blue(`# ${ categoria.categoria }`))
  comandos.map(comando => {
    console.log(
      `${ chalk.green(comando.comando) } ==> ${ comando.descripcion }`
    )
  })
  console.log(' ')
})

