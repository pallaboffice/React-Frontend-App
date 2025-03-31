# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


npm install -D tailwindcss postcss autoprefixer

Install Tailwind CSS & Dependencies

Run the following command in your project root:

npm install -D tailwindcss postcss autoprefixer

✅ Initialize Tailwind

Generate the Tailwind configuration file:

npx tailwindcss init -p

This creates tailwind.config.js and postcss.config.js.
✅ Configure Tailwind

Edit tailwind.config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

✅ Include Tailwind in Your Styles

Replace or create index.css in src/:

@tailwind base;
@tailwind components;
@tailwind utilities;

✅ Restart Your Dev Server

After making these changes, restart your development server:

npm start

/my-react-app
  ├── node_modules/
  ├── src/
  │   ├── index.css  (Contains @tailwind directives)
  │   ├── App.js
  ├── tailwind.config.js
  ├── postcss.config.js
  ├── package.json


  npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss

  ✅ 2. Update postcss.config.js

Make sure your postcss.config.js file in the root of your project looks like this:

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};

If you’re using ES6 import, use:

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [tailwindcss, autoprefixer],
};

https://stackoverflow.com/questions/79383705/cannot-build-frontend-using-vite-tailwindcss-with-postcss

