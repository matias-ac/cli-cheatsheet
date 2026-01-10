import fs from 'node:fs/promises'

let data;

try {
  const rawData = await fs.readFile('./data.json', { encoding: 'utf8' });
  data = JSON.parse(rawData)
} catch (err) {
  console.error(err)
}

// console.log({ data })

data.comandos_terminal.map(categoria => {
  const comandos = categoria.comandos
  console.log(`# ${ categoria.categoria }`)
  comandos.map(comando => {
    console.log(`${ comando.comando } ==> ${ comando.descripcion }`)
  })
  console.log(' ')
})

