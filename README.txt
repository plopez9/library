# Library Web App 0.1.0

This library web app utilizes the Google Books API to create a favorite book list. 

##Installation

Installation for this library web app requires Node.js. To install Node, follow the documentation on the npmjs website (https://www.npmjs.com/get-npm). If Node is already installed, simply follow the following command.

	> npm start

After installation, the library app can be called via command line. In the project directory run the npm start command. The project will then be accessable in your local port 3000 (http://localhost:3000/)

##Usage

The Library app comes with two primary functions. First is the search function located at the top search bar. The search term is entered into the search bar and will return the first 5 entries from the google books API after the search button is pressed. The second is the favorite list toggle. This is activated by pressing on the star icon, which will toggle between your current query and favorites list. 

##Features still in Beta

Currently there is no add feature to add row items to the favorites list. The add and subtract feature will be added to subsuquent patches later in the future.  

##Dead Code

Two tables were created for the search list. This was the TempTable and SearchTable components. Both are in working state and can be accessed by commenting out its counter part, while keeping the intended table. The version that will be kept in the future will be the table that can be best implemented with the add favorites feature. 
