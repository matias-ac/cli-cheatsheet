import fs from 'node:fs/promises'

let data;

try {
  const rawData = await fs.readFile('./data.json', { encoding: 'utf8' });
  data = JSON.parse(rawData)
} catch (err) {
  console.error(err)
}

console.log({ data })

data.comandos_terminal.map(categoria => console.log(categoria))

// for (let category in data.comandos_terminal) {
//   console.log({ category })
// }
