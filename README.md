# Getting Started

## Initial Setup

### Package Installations
Go to [this website](https://nodejs.org/en/download) and select the suitable installer to download Node.js and npm.

### Project Initialization
Create a directory for your project by running 'mkdir ReactWeatherChromeExtension'. This will be the root directory.

#### extension Project
1. In the root directory, run 'npm create vite@latest' to create your project.
2. Respectively, enter your project name 'extension', select a framework 'React', select a variant 'TypeScript'.
3. Run 'cd extension' to go to the extension project's directory.
4. Run 'npm install' to install the required packages.
You are now ready to code the 'extension' project!

#### vite-ts-app Project
1. In the root directory, run 'npm create vite@latest' to create your project.
2. Respectively, enter your project name 'vite-ts-app', select a framework 'React', select a variant 'TypeScript'.
3. Run 'cd vite-ts-app' to go to the vite-ts-app project's directory.
4. Run 'npm install' to install the required packages.
You are now ready to code the 'vite-ts-app' project!

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

## How to Set Up the Development Environment

1. Clone this repository.
2. Open a terminal within the directory where this repository is cloned.
3. Change the directory to 'extension'.
4. Run the 'yarn install' command.

**BOOM!** The development environment is ready.

## How to Add This Extension to Your Browser:

1. Click on the 'three dots' in the top-right corner of Chrome.
2. Select 'Extensions,' then choose 'Manage Extensions.'
3. Enable Developer mode in the top-right corner of the Extensions page.
4. Click on 'Load unpacked' below the search bar for 'Search extensions.'
5. Choose the 'dist' folder located inside the 'extension' directory.

**BOOM!** The extension should now be added to your Chrome browser.

## How to Publish Your Extension to the Chrome Store:

### Initial Configurations for Submission

1. Validate the 'manifest.json' file using [JSONLint](https://jsonlint.com/).
2. Test the extension by loading its unpacked version on the [Extensions](chrome://extensions/) page.
3. Zip the 'dist' folder.
4. Register as a Chrome Web Store Developer on the [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole/register) and pay the $5 registration fee.

#### Configuring Developer and Publisher Settings

1. Fill out the 'Publisher display name' field with the name that will appear to users under the extension's name.
2. Fill out the 'Contact email address' field with the email address that will be publicly displayed in connection with the extension.
3. Declare whether your publisher account is considered a trader or non-trader with respect to European Economic Area (EEA) consumer protection laws in the 'Trader declaration field'.
4. Fill out the 'Trusted tester accounts' field with the email addresses of the specific accounts that the extension will be visible to for testing purposes.
5. Enable the notifications you would like to receive in the 'Notifications' field.
6. Declare whether visibility is enabled or not in the 'Item support' field.

### Uploading the Extension

1. Go to the 'Items' tab on the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/).
2. Click on 'New item' in the top-right corner.
3. Upload the zipped 'dist' folder.

**NOTE:** Your account must have 2 Factor Authentication (2FA). Go to [Authentication](https://safety.google/authentication/) to activate 2FA for your account.

### Submission of Extension

**CAUTION:** Don't forget to click on 'Save draft' periodically to avoid data loss due to unpredictable issues.

#### Store Listing

1. Fill out the 'Description' field focusing on what the extension does and why users should install it.
2. Select the category that best fits the extension from the 'Category' dropdown menu.
3. Choose the primary language of the extension in the 'Language' dropdown menu.
4. Upload the store icon as a PNG file with a size of 128x128 in the 'Store icon' field.
5. Upload at least 1, and at most 5, screenshots of the extension as 24-bit PNG or JPEG files with sizes of 1280x800 or 640x400 in the 'Screenshots' field.

#### Privacy

1. Fill out the 'Single purpose' field by describing the extension's single purpose in a narrow and easy-to-understand manner.
2. Explain why the extension requests each permission in the 'Permission justification' field.
3. If remote code is used, declare it and justify its use in the 'Permission justification' field.
4. Select what user data you plan to collect now or in the future in the 'Data usage' field.
5. If applicable, certify all disclosures.
6. If the extension collects user data, fill out the 'Privacy policy URL' field with the extension's privacy policy URL.

#### Distribution

1. Select whether the extension will be free or offer in-app purchases in the 'Payments' field.
2. Choose the extension's visibility in the 'Visibility' field.
3. Specify in which regions the extension will be available in the 'Distribution' field.

**Last Step:** Once all required fields are filled out sufficiently, and you are satisfied with your submission draft, click on 'Submit for review.'

## How to Share a Chrome Extension Link:

1. Go to the 'Extensions' page on the [Chrome Web Store](https://chromewebstore.google.com/category/extensions).
2. Copy the URL of the extension page.
3. Share the copied URL with your friends.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
