# Shot technical description of the task
To create project and functionality are used Angular/Cli and Typescript.
To create html layout Bootstrap library is used.
For Curve chart I use Google Charts(Dual-Y Charts)

# Web UI
Entry point is Login page - put any login and password and you are on Home page.
Home Page's content is report with list of household’s electrical load simulations.
Clicking on any of simulations you able to go Details page. On this page you will find tables with statistics and chart.

# Getting started

1. Go to project folder and install dependencies:
 ```bash
 npm install
 ```
2. Launch development server, and open `localhost:4200` in your browser:
 ```bash
 ng serve
 ```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

Tasks                         | Description
------------------------------|---------------------------------------------------------------------------------------
npm start                     | Run development server on `http://localhost:4200/`
npm run build [-- --env=prod] | Lint code and build app for production in `dist/` folder
npm test                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
npm run test:ci               | Lint code and run unit tests once for continuous integration
npm run e2e                   | Run e2e tests using [Protractor](http://www.protractortest.org)
npm run lint                  | Lint code
npm run translations:extract  | Extract strings from code and templates to `src/app/translations/template.json`
npm run docs                  | Display project documentation

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

## Code scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use
`npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`,
you can also use the command `ng generate` directly.

## Additional tools

Tasks are mostly based on the `angular-cli` tool. Use `ng help` to get more help or go check out the
[Angular-CLI README](https://github.com/angular/angular-cli).

# What's in the box

The app template is based on [HTML5](http://whatwg.org/html), [TypeScript](http://www.typescriptlang.org) and
[Sass](http://sass-lang.com). The translation files use the common [JSON](http://www.json.org) format.

#### Tools

Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and
[NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:

- Optimized build and bundling process with [Webpack](https://webpack.github.io)
- [Development server](https://webpack.github.io/docs/webpack-dev-server.html) with backend proxy and live reload
- Cross-browser CSS with [autoprefixer](https://github.com/postcss/autoprefixer) and
  [browserslist](https://github.com/ai/browserslist)
- Asset revisioning for [better cache management](https://webpack.github.io/docs/long-term-caching.html)
- Unit tests using [Jasmine](http://jasmine.github.io) and [Karma](https://karma-runner.github.io)
- End-to-end tests using [Protractor](https://github.com/angular/protractor)
- Static code analysis: [TSLint](https://github.com/palantir/tslint), [Codelyzer](https://github.com/mgechev/codelyzer),
  [Stylelint](http://stylelint.io) and [HTMLHint](http://htmlhint.com/)
- Local knowledgebase server using [Hads](https://github.com/sinedied/hads)

#### Libraries

- [Angular](https://angular.io)
- [Bootstrap 4](https://getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ng-bootstrap](https://ng-bootstrap.github.io)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)

#### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](docs/i18n.md)
- [Working behind a corporate proxy](docs/corporate-proxy.md)
- [Updating dependencies and tools](docs/updating.md)
- [Using a backend proxy for development](docs/backend-proxy.md)
- [Browser routing](docs/routing.md)
