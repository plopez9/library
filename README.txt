# Library Web App 0.1.0

This library web app utilizes the Google Books API to create a favorite book list.

##Installation

Installation for this library web app requires Node.js. To install Node, follow the documentation on the npmjs website (https://www.npmjs.com/get-npm). If Node is already installed, simply follow the following command.

	> npm start

After installation, the library app can be called via command line. In the project directory run the npm start command. The project will then be accessible in your local port 3000 (http://localhost:3000/)

##Testing
Tests can be ran from the command line using the command npm test. The combination of 5 test suites, totaling 11 tests, were created using Jest and Enzyme. The current iteration of this app should pass all 11 tests.

##Usage

This Library app is set to query search results from Google Books API and allow the user to create a favorites list. This can be accomplished by using the input search function located at the top of the app. A search term can be entered into the search bar and the search button or a simple enter key will enter the request. If query results are found, they will be displayed in a table. This table allows the user to add favorites via the add button. These favorites are stored in a favorites list. Which, can be accessed using the star (favorites button) located opposite of the search button. This button toggles back and forth from list to list.  
