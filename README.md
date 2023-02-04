# Movie-Wizard
This application displays movie data from omdbapi.com. The movies are sortable by year, and can clicked to get a detailed synopsis.

# Steps to Run Locally
Once forked and cloned from Github, please follow the below steps
1. Open a terminal and navigate to the folder `movie-wizard`.
2. Once inside, run `npm i`. This will install all the dependencies.
3. In order to run in local, an API key is required. Please acquire one from [OMDb API](https://www.omdbapi.com/apikey.aspx).
4. Once you have the key, create a file in the root of `movie-wizard` and name the file `.env`.
5. Inside the `.env` file, paste the following:

> REACT_APP_API_KEY=YOUR_API_KEY
6. Now, you can start the application by executing `npm start` in the terminal.
