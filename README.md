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

## Unit Test

Test Result: 34 pass / 34 tests

### Components
1. MiscCard
2. CourseCard
3. NoteCard

### Form
1. LoginForm
2. RegisterForm

### Redux
1. note
2. user
3. school

### Function
1. avatarSrc
2. statFormatting

## Automated User Acceptance Test

Please refer to [PenDown-test](https://github.com/AOPLab/PenDown-test)

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
