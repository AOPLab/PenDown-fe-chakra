# PenDown Frontend

## Dev Environment

- OS: macOS / Linux / Windows
- PM: Yarn
- IDE: Visual Studio Code (recommended)
  - required plugins:
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

## Development

1. Clone this repository
  ```
  git clone https://github.com/AOPLab/PenDown-fe-chakra.git
  ```
2. Open the directory in your favorite text editor (**VS Code** is highly recommended). If you are using VS Code, please make sure you have the mentioned plugins installed.
4. In terminal, use `yarn` to install the [dependencies](package.json).
5. Before you run our app, please [connect to a backend server (either ours or yours)](#connecting-to-our-server)
6. Run `yarn start` to run the app in the development mode.

### Connecting to Our Server

You have two options:

1. Please contact us for the `.env` file. Our present data are all stored in our server.
2. If you want to replicate this app, please also consider to clone our [`PenDown-be` repository](https://github.com/AOPLab/PenDown-be.git), and follow the instructions there.

  In your `.env`, you should put in:

  ```
  SKIP_PREFLIGHT_CHECK = true
  REACT_APP_API_ROOT='http://127.0.0.1:8080'
  REACT_APP_OAUTH_ID=YOUR_AUTH_ID
  ```

  > You should sign up for your own "Continue with Google" AUTH ID. That said, it won't cost you anything if you don't do so, that'll allow your clients to continue without Google.

  That'll do it.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
