---
sidebar_position: 1
---

Github: https://github.com/skyhitz/skyhitz-expo-next

This repository contains frontend code of the Skyhitz app. It's a monorepo that uses [Solito](https://github.com/nandorojo/solito) to reuse code between Web and Mobile.

## Project structure

- `apps` entry points for each app

  - `expo` here you can import all expo specific packages, or configure expo app (`app.json` or `eas.json`)
  - `next` here you can import all next expecific packages and configure next app
    - `pages` under this directory you have to maintain navigation hierarchy according to next guidelines
    - `public` here you can put files that should be static served

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `api` directory for all graphql related code. Here you will add new queries or mutations (see [more](graphql.md))
    - `assets` directory for assets like fonts or images
    - `config` directory where we keep config depending on the current environment
    - `constants` directory for constants
    - `design-system` directory for all things related to design-system. it should be merged in the future with `ui` directory
    - `features` components organized by feature
    - `hooks` directory where we keep all our custom hooks
    - `navigation`
      - `mobile` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.
      - `web` We use it as a wrapper to for the dashboard navbar
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `state` all recoil related code
    - `stellar` stellar related code (i.ex. creating transactions). Could be moved to utils
    - `types` directory where we keep global types (i.ex. user)
    - `ui` directory where we keep components that are reused by many features i.ex. buttons, inputs
    - `utils` self-explanatory
    - `validation` code for form validation. Could be moved to utils

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev: `yarn native`
  - Runs `expo start`

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).
