# Node.js cheatsheet for CLI users 

This is a prototype for a CLI tool builded with Node.js that prints on a terminal a cheatsheet with useful linux commands for everyday developer tasks (like 'cd', 'ls', etc.).

## Requirements

- Node.js

## Config

*Steps:*

- open a terminal
- clone this repo and move to it
- install dependencies: `npm install`
- locate your `.zshrc` or `.bashrc` and open it with a text editor 
- create an alias (e.g. `cheatsheet`)
- asign it the next instruction: `node /path/to/index.js`
  - you can get `index.js` path with `pwd` within this project folder
- close and open a new terminal to apply changes 

### Example

- `.zshrc` file:
```zsh
# ...
# ...your .zshrc content
# ...
alias cheatsheet='node /home/matias/repos/cli-cheatsheet-manager/index.js' 
```

## Usage

- just open a terminal and type your new alias (e.g. `cheatsheet`)
- you will see the cheatsheet:

```sh
󰣇 ~ ❯ cheatsheet                                                                                                                                                                                          17:17 
# ¡Bienvenido a la CheatSheet de comandos Linux para Developers!
 
## Navegación
ls ==> Lista archivos y carpetas
cd ==> Cambia de directorio
pwd ==> Muestra la ruta del directorio actual
tree ==> Muestra estructura de carpetas
 
## Gestión de archivos y carpetas
touch ==> Crea un archivo vacío
mkdir ==> Crea un nuevo directorio
cp ==> Copia archivos o carpetas
mv ==> Mueve o renombra archivos
rm ==> Elimina archivos
rmdir ==> Elimina carpetas
 
## Lectura de archivos
cat ==> Muestra contenido de un archivo
less ==> Visualiza un archivo página por página
head ==> Muestra las primeras líneas de un archivo
tail ==> Muestra las últimas líneas de un archivo
 
## Procesos del sistema
top ==> Muestra procesos en ejecución
ps ==> Muestra historial de comandos
kill ==> Termina un proceso
df -h ==> Muestra espacio disponible en discos
du -sh ==> Muestra tamaño de archivos y carpetas
uptime ==> Muestra tiempo encendido y carga del sistema
clear ==> Limpia la terminal
 
## Utilidades de sistema
echo ==> Imprime texto en la terminal
history ==> Muestra historial de comandos
man ==> Muestra el manual de un comando
nano ==> Editor de texto básico
vim ==> Editor de texto avanzado
 
## Permisos de archivos
chmod ==> Cambia permisos de un archivo
chown ==> Cambia propietario de un archivo
sudo ==> Ejecuta comandos como administrador
 
## Búsqueda de ficheros
find ==> Busca archivos en directorios
grep ==> Busca texto dentro de archivos
 
## Utilidades de red
ping ==> Comprueba conexión con una dirección
curl ==> Realiza peticiones HTTP
wget ==> Descarga archivos desde una URL
󰣇 ~ ❯                                                 
```
