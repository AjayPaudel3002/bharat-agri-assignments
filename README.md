# Movie Database

### Features

* Use this api  https://jsonplaceholder.typicode.com/ to get the username and then login .    
* Validation is done,empty string or username which is not present in https://jsonplaceholder.typicode.com/ is entered then it will return error in alert box. 
* Each page is protected, ie user can't switch to any pages if he is not loged in.
* After loged in, user can able to see the welcome note and movies list which has been fetched from https://www.omdbapi.com/ .(Note: i have pushed with my api key)
* Made use of Cookies to store the user details when loged in and clearing the user details when loged out.
* User can search for the name of movies,series.
* Made use of local storage to store the serach history of each user.
* On clicking the input filed it will display the search history of respective user.
* To view the more information about the movies ,user can click on the images which has been displayed.
* User on clicking on the images ,it will route to new page where user can view the details of the particular movie.

### Screenshots

[![Screenshot-from-2019-11-17-17-42-33.png](https://i.postimg.cc/jdyDY5Ft/Screenshot-from-2019-11-17-17-42-33.png)](https://postimg.cc/GHhLkcR5)

[![Screenshot-from-2019-11-17-17-43-07.png](https://i.postimg.cc/430f9kSW/Screenshot-from-2019-11-17-17-43-07.png)](https://postimg.cc/Mcy2C4xB)

[![Screenshot-from-2019-11-17-18-24-17.png](https://i.postimg.cc/YCJqswtT/Screenshot-from-2019-11-17-18-24-17.png)](https://postimg.cc/BjB0jkLC)



### Npm Packages
* bootstrap  
* axios
* query-string
* react-router-dom


### Instruction to run locally
Use following commands to run Movie Database locally

`cd movie_database`

`npm install`

`npm start`
