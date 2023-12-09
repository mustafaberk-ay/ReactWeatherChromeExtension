# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## How to Setup the Dev Environment?

1. Clone this repo
2. Open a terminal for the directory this repository is cloned to.
3. Change directory to 'extension'.
4. Run 'yarn install' command.

**BOOM!** The dev environment is ready.

## How to Add This to Your Browser as an Extension:

1. Click on the 'three dots' in the top-right corner of Chrome.
2. Select 'Extensions' and then choose 'Manage Extensions'.
3. Enable Developer mode in the top-right corner of the Extensions page.
4. Click on 'Load unpacked' below the search bar for 'Search extensions'.
5. Choose the 'dist' folder located inside the 'extension' directory.

**BOOM!** The extension should now be added to your Chrome as an extension.

## How to Publish your Extension to Chrome Store?

1. Check the validity of 'manifest.json' file using [JSONLink](https://jsonlint.com/)
2. Test the extension by loading its unpacked version on the [Extensions](chrome://extensions/) page.
3. Zip the folder that contains the extension files.
4. Register as a Chrome Web Store Developer on the [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole/register) and pay the 5$ registration fee.
5. Customize developer and publisher settings.
6. Go to the 'Items' tab on the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
7. Click on 'New item' on the top-right corner of the webpage.
8. Publish it in the way you desire (public, unlisted, private, group publishing) on [Chrome Web Store](https://developer.chrome.com/webstore/publish)

**BOOM!** The extension is now on Chrome Store.

## How to Share a Chrome Extension Link?

1. Go to the extension page on Chrome Web Store.
2. Copy the url of the extension page.
3. Share it with your friends.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
