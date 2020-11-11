# 2020 Onboarding Project

This project has been built to achieve the onboarding project goals for 2020. It uses some of the same technologies that the company use to develop their own applications:

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [BackboneJS](https://backbonejs.org/)
- [requireJS](https://requirejs.org/)
- [Webpack](https://webpack.js.org/guides/getting-started/)
- [Grunt](https://gruntjs.com/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://github.com/enzymejs/enzyme)
- [SASS](https://sass-lang.com/)

The application consumes the [Hearthstone API](https://rapidapi.com/omgvamp/api/hearthstone), that is a public API hosted at Rapid API, to show and filter the cards of  Hearthstone: Heroes of Warcraft, a Blizzard's card game.

#### Development

First of all, you will need to build a distribution version of the React App inside the folder `reacstone-app`. You can find the instruction [here](https://github.com/ralfdarocha/2020-onboarding-project/tree/main/reactstone-app/README.md).
Then you can simply run the following:

```sh
$ npm start
```

#### Building for production

The whole application can be built and ready for production with the following command:

```sh
$ npm run dist
```

Automated tests will be executed and applications will be built and compressed on `dist` folder.