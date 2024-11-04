# Typescript Express Skelly

Typescript Express Skelly is a bare-bones scaffold to get an Express server up and running w/ Typescript.

## Description

Setting up a project with express-generator has been one of the go to ways to get an Express server up and running quickly, especially for newer developers in the Node.js ecosystem. From there, the user can add/remove dependencies as the application evolves. HOWEVER, express-generator does not support typescript out of the box. The goal was to make something lightweight (not bloated with dependencies which the developer may not need) and keep the relative simplicity of express-generator all while supporting typescript from the jump.

Ideally catered to newer developers in the Node.js ecosystem. Some other repositories aimed at setting up an Express server already come with auth configurations, database connectivity and ORM/ODM, various abstraction layers, etc. w/ daunting directory setups that may seem difficult to understand for folks dipping their toes into Node for the first time. Of course, more experienced folks are welcome to use it as well! Keep it simple!

## Features

- same dependencies as express-generator (morgan, http-errors, debug, cookie-parser)
- cors added
- templating removed
- nodemon setup
- typescript
- simple directory setup. Server execution in src/index.ts

```
├── public
│   └── images
├── src
│   ├── index.ts
│   ├── app.ts
│   ├── controllers
│   │   └── indexControllers.ts
│   └── routes
│       └── index.ts
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Set Up

Clone this repo into a directory of choice to get started

```bash
git clone git@github.com:Applefrittr/typescript-express-skelly.git
```

## Usage

To get the Express server running (using npm)

```bash
cd typescript-express-skelly
npm run dev
```
