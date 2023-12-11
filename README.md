# Initial Setup

## Package Installations

1. Go to [Node.js website](https://nodejs.org/en/download) and choose the appropriate installer to download Node.js and npm. If you have chocolatey package manager, then you can also install Node.js by running `choco install nodejs`. Please note that npm is included in the Node.js installation.
2. Install Yarn by running `npm install --global yarn`. If you have chocolatey package manager, then you can also install Yarn by running `choco install yarn`.
3. Install Google Chrome by running `choco install googlechrome` to be able to run projects on Google Chrome.

## Project Initialization

Create a directory for your project by running `mkdir ReactWeatherChromeExtension`. This will be the root directory.

### extension Project

1. In the root directory, run `yarn create react-app extension --template typescript` to create your project.
2. Navigate to the extension project's directory by running `cd extension`.
3. Install the required packages with `yarn install`.
   
Now, you are ready to code the 'extension' project!

### vite-ts-app Project

1. In the root directory, run `npm create vite@latest` to create your project.
2. Enter your project name as 'vite-ts-app', select the framework 'React', and choose the variant 'TypeScript'.
3. Move to the 'vite-ts-app' project's directory with `cd vite-ts-app`.
4. Install the required packages with `npm install`.

Now, you are ready to code the 'vite-ts-app' project!

## Available Scripts

### How to Install Required Packages?

#### extension
Run `yarn install` to install the required packages for the extension project.

#### vite-ts-app
Run `npm install` to install the required packages for the 'vite-ts-app' project.

### How to Run the Projects in Development Mode?

#### extension
Run `yarn start` to launch the extension project in development mode.

#### vite-ts-app
Run `npm run dev` to run the 'vite-ts-app' project in development mode.

### How to Build the Projects for Production?

#### extension
Run `yarn build` to build the extension project for production, and the output will be in the `dist` folder.

#### vite-ts-app
Run `npm run build` to build the 'vite-ts-app' project for production, and the output will be in the `dist` folder.

### How to Debug the Projects?

#### extension
Run `yarn test` to launch the test runner in interactive watch mode for the extension project.

# Setting Up the Development Environment

1. Clone this repository.
2. Open a terminal within the directory where this repository is cloned.
3. Change the directory to 'extension'.
4. Run the 'yarn install' command.

**BOOM!** The development environment is ready.

# Adding the Extension to Your Browser

1. Click on the 'three dots' in the top-right corner of Chrome.
2. Select 'Extensions,' then choose 'Manage Extensions.'
3. Enable Developer mode in the top-right corner of the Extensions page.
4. Click on 'Load unpacked' below the search bar for 'Search extensions.'
5. Choose the 'dist' folder located inside the 'extension' directory.

**BOOM!** The extension should now be added to your Chrome browser.

# Publishing Your Extension to the Chrome Store

## Initial Configurations for Submission

1. Validate the 'manifest.json' file using [JSONLint](https://jsonlint.com/).
2. Test the extension by loading its unpacked version on the [Extensions](chrome://extensions/) page.
3. Zip the 'dist' folder.
4. Register as a Chrome Web Store Developer on the [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole/register) and pay the $5 registration fee.

### Configuring Developer and Publisher Settings

1. Fill out the 'Publisher display name' field with the name that will appear to users under the extension's name.
2. Fill out the 'Contact email address' field with the email address that will be publicly displayed in connection with the extension.
3. Declare whether your publisher account is considered a trader or non-trader with respect to European Economic Area (EEA) consumer protection laws in the 'Trader declaration field'.
4. Fill out the 'Trusted tester accounts' field with the email addresses of the specific accounts that the extension will be visible to for testing purposes.
5. Enable the notifications you would like to receive in the 'Notifications' field.
6. Declare whether visibility is enabled or not in the 'Item support' field.

## Uploading the Extension

1. Go to the 'Items' tab on the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/).
2. Click on 'New item' in the top-right corner.
3. Upload the zipped 'dist' folder.

**NOTE:** Your account must have 2 Factor Authentication (2FA). Go to [Authentication](https://safety.google/authentication/) to activate 2FA for your account.

## Submission of Extension

**CAUTION:** Don't forget to click on 'Save draft' periodically to avoid data loss due to unpredictable issues.

### Store Listing

1. Fill out the 'Description' field focusing on what the extension does and why users should install it.
2. Select the category that best fits the extension from the 'Category' dropdown menu.
3. Choose the primary language of the extension in the 'Language' dropdown menu.
4. Upload the store icon as a PNG file with a size of 128x128 in the 'Store icon' field.
5. Upload at least 1, and at most 5, screenshots of the extension as 24-bit PNG or JPEG files with sizes of 1280x800 or 640x400 in the 'Screenshots' field.

### Privacy

1. Fill out the 'Single purpose' field by describing the extension's single purpose in a narrow and easy-to-understand manner.
2. Explain why the extension requests each permission in the 'Permission justification' field.
3. If remote code is used, declare it and justify its use in the 'Permission justification' field.
4. Select what user data you plan to collect now or in the future in the 'Data usage' field.
5. If applicable, certify all disclosures.
6. If the extension collects user data, fill out the 'Privacy policy URL' field with the extension's privacy policy URL.

### Distribution

1. Select whether the extension will be free or offer in-app purchases in the 'Payments' field.
2. Choose the extension's visibility in the 'Visibility' field.
3. Specify in which regions the extension will be available in the 'Distribution' field.

**Last Step:** Once all required fields are filled out sufficiently, and you are satisfied with your submission draft, click on 'Submit for review.'

# Sharing a Chrome Extension Link

1. Go to the 'Extensions' page on the [Chrome Web Store](https://chromewebstore.google.com/category/extensions).
2. Copy the URL of the extension page.
3. Share the copied URL with your friends.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
