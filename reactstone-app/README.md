# 2020 Onboarding Project - Reactstone APP

#### Development

In order to run the app in development mode, run the following command.

```sh
$ npm start
```

#### Testing

In order to test the app with Jest, run the following command.

```sh
$ npm run test
```

If you made some structural changes on `src/components/card/card.tsx` and the unit tests have failed due to the snapshots, run the following command to update the snaphots:

```sh
$ npm run test:update
```

#### Building for production

In order to build an AMD build of this component, that can be used as a web component, run the following:

```sh
$ npm run build
```