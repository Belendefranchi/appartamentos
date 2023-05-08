# :star: Work flow de Git

---

## <img src="https://img.icons8.com/color/40/null/git.png" alt="logo git" width="40" height="40"/> Work flow - Branch

- Para leer más sobre el tema: [GitFlow Workflow - Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

---

## <img src="https://img.icons8.com/color/40/null/git.png"  alt="logo git" width="40" height="40" /> Buenas prácticas de commits


1. Hacer todos los commits en inglés

2. Usa el verbo imperativo: **add**(significa que se añade un nuevo archivo), **change**(significa que se modifica un archivo existente), **fix**(significa que se arregla un bug), **remove**(significa que se elimina un archivo), etc.

Sé que muchas veces estamos tentados a escribirlo en pasado “Added…”, “Fixed…” o “Removed…” pero cada commit hay que entenderlo como una instrucción para cambiar el estado del proyecto. Dicho de otro modo, el verbo presente nos permite saber qué estado queremos que el proyecto se encuentre en el momento de añadir el commit.

Ejemplos:

```
add a new search feature
fix a problem with the topbar
change the default system color
remove a random notification
```

3. No uses punto final ni puntos suspensivos en tus mensajes.

Usar puntuación, más allá de las comas, es innecesario a la hora de crear un buen mensaje de commit. Cada carácter cuenta a la hora de crear un buen mensaje de commit así que no lo desperdicies con puntos innecesarios.

```
git commit -m "Add new search feature." # ❌
git commit -m "Fix a problem with the topbar..." # ❌
git commit -m "Change the default system color" # ✅
```

4. Usa como máximo 50 carácteres para tu mensaje de commit

Sé corto y conciso. Si tienes mucho que explicar… seguramente es que tu commit hace demasiadas cosas. ¿Puedes separarlo en diferentes commits? Pues hazlo.

Haz que el mensaje sea claro, directo y que realmente refleje los cambios que lleva.

5. Añade todo el contexto que sea necesario en el cuerpo del mensaje de commit.

A veces necesitas proveer de más contexto a tu commit. Para ello, en lugar de saturar el sumario del commit, añade información que sea necesaria en el cuerpo del mensaje.


6. Usa un prefijo para tus commits para hacerlos más semánticos.

Cuando un proyecto crece, es necesario que existan ciertas reglas para que el historial sea legible. Para ello, puedes añadir un prefijo para darle más significado a los commits que realizas. A esto se le llama commits semánticos y se haría de la siguiente manera:

<tipo-de-commit>[#nro-issue]- <descripcion>
Por ejemplo:

```
feat:#2-header Add header
^--^ ^-^ ^--------------------^
│     |   │
│     |   └--> # Descripción de los cambios
│     └--> # Hash y numero del issue de GitHub
|
└──------> # Tipo del cambio
```

Estos serían los prefijos:

- **feat**: Una nueva característica para el usuario.

- **fix**: Arregla un bug que afecta al usuario.

- **perf**: Cambios que mejoran el rendimiento del sitio.

- **build**: Cambios en el sistema de build, tareas de despliegue o instalación.

- **ci**: Cambios en la integración continua.

- **docs**: Cambios en la documentación.

- **refactor**: Refactorización del código como cambios de nombre de variables o funciones.

- **style**: Cambios de formato, tabulaciones, espacios o puntos y coma, etc; no afectan al usuario.

- **test**: Añade tests o refactoriza uno existente.



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

2. Hago el commit: `git commit -m "aca va el mensaje"`, en cuanto al mensaje vamos autilizar lo detallado arriba como buenas prácticas, ejemplo: `git commit -m "doc:#1-documentacion-workflow-comandos-git I add some git commands"`

3. Pusheo: `git push`

## ¿Cómo actualizo mi rama con el repositorio de GitHub?

1. Me situo en la rama que quiero actualizar: `git pull`

---
