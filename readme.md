**Baufest Web**

Este es un proyecto base de Cypress con Cucumber y TypeScript para automatizar pruebas E2E en aplicaciones web.
Conectado a Cypress cloud para su analisis

**Cypress Cloud**
Cypress Cloud es una plataforma de pruebas en la nube que proporciona un entorno de ejecución escalable y confiable para
pruebas de automatización. Con Cypress Cloud, los usuarios pueden ejecutar pruebas en múltiples navegadores, versiones
de navegador y plataformas, y recibir informes de pruebas detallados para ayudar en la solución de problemas.

Para ver las pruebas de este proyecto puede ingresar a
[aqui
](https://cloud.cypress.io/projects/ah116i/runs/1/test-results)

**Prerequisitos**
```
Node.js versión 12 o superior
ide: Aqua (recomendado) o VS code

```

**Instalación**

Para comenzar, clona este repositorio e instala las dependencias:

```
git clone https://github.com/GURIFIFLAY/BaufestWeb

cd BaufestWeb

npm install
```
**Correr el proyecto**
```
npm run  e2e:record
```
**Estructura del proyecto**

```
.
├── ├── cypress
├── │ ├── e2e
├── │ │ └── website -> Carpeta contenedora de features
├── │ │ ├── addProduct.feature
├── │ │ ├── loginLogout.feature
├── │ │ ├── sIgnUP.feature
├── │ │ └── visit.feature
├── │ ├── fixtures
├── │ │ └── example.json
├── │ ├── screenshots
├── │ ├── support
├── │ │ ├── step_definitions -> Pasos de prueba
├── │ │ │ └── steps.ts
├── │ │ ├── commands.ts -> Custom commands 
├── │ │ └── e2e.ts 
├── │ ├── videos
├── │ └── tsconfig.json
├── ├── .gitignore
├── ├── cypress.config.ts
├── ├── package-lock.json
├── ├── package.json
└── └── readme.md
```
