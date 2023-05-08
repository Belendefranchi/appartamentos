# :star: Work flow de Git

---

## <img src="https://img.icons8.com/color/40/null/git.png" alt="logo git" width="40" height="40"/> Work flow - Branch

- Para leer más sobre el tema: [GitFlow Workflow - Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

---

## <img src="https://img.icons8.com/color/40/null/git.png"  alt="logo git" width="40" height="40" /> Buenas prácticas de commits

- [Buenas practicas para escribir commits en git -MiduDev](https://midu.dev/buenas-practicas-escribir-commits-git/)

---

# :star: Comandos git

## ¿Cómo copio el proyecto de GitHub en local?

1. Voy al GitHub del proyecto: [https://github.com/Belendefranchi/appartamentos](https://github.com/Belendefranchi/appartamentos)

2. Hago click en el boton **code**

3. Copio la dirección HTTPS: [https://github.com/Belendefranchi/appartamentos.git](https://github.com/Belendefranchi/appartamentos.git)

4. En mi computadora creo una carpeta para la aplicación, se recomienda que tenga el mismo nombre del repositorio (**appartamentos**)

5. Estando dentro del directorio: `git clone https://github.com/Belendefranchi/appartamentos.git .` de este modo tendré todo el repositorio en local. Con el **.** evito que me cree una subcarpeta.

## ¿Cómo instalo dependencias e inicializo el proyecto localmente?

1. Estando dentro de la carpeta del proyecto.

2. Instalo las dependencias: `npm install`.

3. Levanto el proyecto en el navegador: `npm run dev`


## ¿Cómo traer una rama remoto a mi repositorio local?

1. `git fetch origin <nombre-de-la-rama-que-veo-en-githug>`

2. `git checkout <nombre-de-mi-rama-local>`, para que sea más claro se recomienda nombrarla la rama local igual que la rama remota

## ¿Cómo veo todas las ramas?

1. Tengo dos opciones: `git branch` y `git branch -a`.

## ¿Cómo crear una rama?

1. Ya situado desde la rama de la que quiero crear la nueva(desde la rama **release**): `git checkout -b <nombre-de-la-nueva-rama>`

## ¿Cómo renombro una rama?

1. Estando en la rama a renombrar: `git branch -m <nombre-de-la-nueva-rama>`

## ¿Cómo borro una rama?

1. Ya situado en la rama que quiero borrar: `git branch -D <nombre-de-la-rama-a-borrar>`

## ¿Cómo commiteo?

1. Agrego los cambios realizados: `git add .`(**.** para agregar todos los cambios) ó `git add <nombre-de-documento>` para solo agregar de a un archivo.

2. Hago el commit: `git commit -m "aca va el mensaje"`, en cuanto al mensaje vamos autilizar lo detallado arriba como buenas prácticas, ejemplo: `git commit -m "doc:#1"`

---
