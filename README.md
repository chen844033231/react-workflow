## React-workflow

### Why
```
  Large SPA application is hard to design, because a lot of things need to consider
  The boilerplate had solved the difficulty for you:
  
  > ES6
  > Modular
  > Component
  > Dynamic routing
  > Base64 encoding
  > File hash cache
  > incremental load
  > Compression combined
  > Time traveling debugger
  > Unidirectional data flow
  > ...
```

### What
> React-workflow is a large SPA
> boilerplate for web development built on top of Facebook's
> [React](https://facebook.github.io/react/) library,use
> [redux](https://github.com/rackt/redux) architecture,
> [react-router]()
> [Node.js](https://nodejs.org/) / [Express](http://expressjs.com/) server.
> Containing modern web development tools such as [Webpack](http://webpack.github.io/),
> [Babel](http://babeljs.io/) and [BrowserSync](http://www.browsersync.io/),
> [nodemon](https://github.com/remy/nodemon) and
> [gh-pages](https://github.com/tschaub/gh-pages) to deploy your site to git branch.
> Helping you make site faster and modern. 
> For beginner and professional developer provide the starting point of a professional high-level react boilerplate.
> This is not a isomorphic application (′⌒`).

### Getting Started

Just clone the repo and run :

> Note: your node version need >= 5.0.0

```shell
$ npm install
...
$ npm start
```

### Other Commands

```shell
$ npm run lint      (lint your js files)
$ npm run start     (start develop model)
$ npm run build    (clean bundle server and deploy your application)
$ npm run deploy    (copy file and publish your site to git `gh-pages` branch)
...
```


### Directory Layout

```
.
├── /node_modules/               # 3rd-party libraries and utilities
├── /build/                      # build files
├── /client/                     # The source code of the application for client
├── /server/                     # The source code of express server
├── /tasks/                      # Build automation scripts and utilities
│   ├── /bundle.js               # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js                # Cleans up the output (build) folder
│   ├── /webpack.config.js       # Webpack configuration for application bundles
│   ├── /server.js               # Launches the Node.js/Express web server
│   └── /build.js                # bundle and build files
│   └── /deploy.js               # deploy build files to git branch
│   └── /browserSync.js          # browserSync tools and webpack middleware
│   └── /start.js                # Launches the development web server with "live reload"
│── package.json                 # The list of 3rd party libraries and utilities
└── processes.json               # production settings for PM2
```


### Learn More

  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [Flux Architecture for Building User Interfaces](http://facebook.github.io/flux/)
  * [Flow - A static type checker for JavaScript](http://flowtype.org/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/)
  * [ES6 Features](https://github.com/lukehoban/es6features#readme)
  * [Css Modules](https://github.com/css-modules/css-modules)
  
### Make Better

  * if you find bug or have new feature requirements, please let me know
  * welcome PR

### Support

  * Email:844033231@qq.com

### License

Copyright © 2014-2015 marchen. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/chen844033231/react-workflow/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.
