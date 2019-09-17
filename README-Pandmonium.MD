# Burger Queen

# PanD'monium.:fork_and_knife:

Nos contactó una cadena de comida rápida vegana para que contruyamos una interfaz para optimizar toma de pedidos y administración dentro de sus locales establecidos.

## Definición del producto.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos a la cocina para que se preparen ordenada y eficientemente (a través de un _backend_ del que nos darán detalles más adelante).

![Alt](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

## Historias de Usuario.

#### [Historia de usuario 1] Mesero/a debe poder entrar a la aplicación.

Yo como mesero debo de poder entrar a la aplicación con un codigo personalizado, para poder tomar ordenes. 

##### Criterios de aceptación:

 - Debe de contar con un codigo valido para ingresar a la aplicación.
 
 ##### Definición de terminado:
 
 - Debe de haber recibido un codigo para ingresar a la aplicación y debe ser redireccionado a su area de trabajo.

#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente.

Yo como mesero/a quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

-   Anotar nombre de cliente.
-   Agregar productos al pedido.
-   Eliminar productos.
-   Ver resumen y el total de la compra.
-   Enviar pedido a cocina (guardar en alguna base de datos).
-   Se ve y funciona bien en una  _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

-   Debes haber recibido  _code review_  de al menos una compañera.
-   Haces  _test_  unitarios y, además, has testeado tu producto manualmente.
-   Hiciste  _tests_  de usabilidad e incorporaste el  _feedback_  del usuario.
-   Desplegaste tu aplicación y has etiquetado tu versión (git tag).

## Sobre el diseño

 El restaurante Pan D'Monium tiene el objetivo de estandarizar la forma de tomar pedidos y que eso se refleje en el tiempo de entrega tanto en sucursal para posteriormente implementarlo en el resto de la cadena, así también facilitar la cobranza e impactar el trabajo en cocina.
 
## Prototipado.
 
Para más detalles sobre el prototipo se adjunta el link en [Marvel] del proyecto (https://marvelapp.com/cdg1d4a/screen/61098993).

![Proto1](https://github.com/MercedesDavila/Pandmonium/blob/branch-Mercedes/img/proto_1.JPG?raw=true)
![Proto2](https://github.com/MercedesDavila/Pandmonium/blob/branch-Mercedes/img/proto_2.JPG?raw=true)
![Proto3](https://github.com/MercedesDavila/Pandmonium/blob/branch-Mercedes/img/proto_3.JPG?raw=true)
![Proto4](https://github.com/MercedesDavila/Pandmonium/blob/branch-Mercedes/img/proto_4.JPG?raw=true)

## Plan de Acción.:bookmark_tabs:
Para este proyecto se siguio el siguiente plan de acción:

### Inicializar el proyecto.:computer:

 - [x] Forkear y clonar repositorio de 
       [Proyecto-Padmonium](https://github.com/MercedesDavila/Pandmonium).
 - [x] Instalar el framework que se utilizara  (React).
 - [x] Crear proyecto en Firebase.
 - [x] Dar permisos a los integrantes del equipo en la consola de Firebase.
 - [x] Habilitar Firestore(Base de Datos).
 - [x] Instalar linea de comando de Firebase.
 - [x] Desplegar: `firebase deploy`
 
 ### Kanban Board.

Nuestro tablero kanban nos ayudara a definir las tareas que se tienen que realizar y cual es el avance en cada una de ellas,  se actualizara conforme el proyecto avance, este es el primer sprint del proyecto: 

![Tablero Kanban 2](https://github.com/MercedesDavila/Pandmonium/blob/branch-Mercedes/img/Tablero_Proyecto.jpg?raw=true)

![Tablero Kanban](https://github.com/MercedesDavila/Pandmonium/blob/branch-Mercedes/img/historias.png?raw=true) 


 ### Diseño de la Aplicación.
 
 - [ ] Entender el prototipo elaborado por las compañeras de UX.
  - [ ] Entender el flujo del proyecto.
 - [ ] Crear las historias de usuario que respondan a las necesidades encontradas y soluciones propuestas.

 ### Primeros Pasos.
 
- [ ] Organización del proyecto. 
- [ ] Leer documentación de React.
- [ ] Entender Boilerplate del proyecto.
- [ ] "Hola Mundo"

### Comenzar a programar.

 - [ ] Dividir tareas.
 - [ ] Entender componentes/Estados. 


# Desarrollo. :computer:

Herramientas utilizadas para el desarrollo de este proyecto:

-   JavaScript.
-   React.
-   Firebase.
-   Firestore.
-   CSS.

Construido con:
 -   Visual Studio Code, editor de código fuente.
 
 ## Otros recursos.:file_folder:
 - [Create React APP](https://create-react-app.dev/docs/getting-started).
 - [Firebase](hhttps://firebase.google.com/).
 - [Firestore](https://firebase.google.com/docs/firestore?hl=es-419)
 - [Cloud functions - Firebase Docs](https://firebase.google.com/docs/functions/?hl=es-419)

## Autores. :pencil2:

Este proyecto fue desarrollado e implementado por:

 -  **Mercedes Dávila Vázquez**  [Github](https://github.com/MercedesDavila/Pandmonium) 
 - **Gabriela Bárcena Villanueva**[Github](https://github.com/gbarcenav/Pandmonium)
 -  **Berenice Ramos** [Github](https://github.com/Bere333/Pandmonium)
 - **Ivon** [Github](https://github.com/BLANK-TECH/Pandmonium)
 -  **Tania Juarez** [Github](https://github.com/TaniaEJuarez/Pandmonium)

## Checklist:ballot_box_with_check:


### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Documenta proceso de diseño.
* [ ] Incluye info para developers (deps, instalación, uso, despliegue, testing,
...).

### Lighthouse (opcional)

* [ ] 80% o más en sección _Performance_.
* [ ] 80% o más en sección _Progressive Web App_.
* [ ] 80% o más en sección _Accessibility_.
* [ ] 80% o más en sección _Best Practices_.

### Tests

* [ ] 70% o más en cobertura de _statements_.
* [ ] 70% o más en cobertura de _functions_.
* [ ] 70% o más en cobertura de _lines_.
* [ ] 70% o más en cobertura de _branches_.

### UX

* [ ] Se _ve_ bien y _funciona_ bien en los dispositivos acordados.
* [ ] Se puede _agregar a la pantalla de inicio_ como web app (tiene manifest,
íconos, ...) en iOS y Android.
* [ ] Uso fácil en pantallas táctiles (touch screens).
* [ ] Estado actual del pedido siempre visible mientras tomamos un pedido.