# Barts-Place
CW2 for Web Development 2 Glasgow Caledonian Uni year 3
Application is deploy using Heroku.com and can be find on:
https://barts-place.herokuapp.com/
For demonstration purpous username and password is: "admin"
password is bcrypt using 12 rounds

In order to check out this code or use this application you need to download it from remote repository.
To do so use 'git clone https://github.com/BOsmola/Barts-Place.git' command in your git terminal, follow by 'cd' to change to root directory. 
Then to install needed dependancies use 'npm install', lastly you need to create '.env' file on your root directory with
'ACCESS_TOKEN_SECRET="Bart's Restaurant Web Token"' in it. When you're ready to run the application use 'node index.js'.

The application welcomes you with the home page of the restaurant with some general information about it,
openning hours, localization, telephone number (all of them fictitious). From here, using the link,
you can go to embedded Google map link with localization of the restaurant. There is navbar on the top of the screen
to the other pages, so we have the 'About' page which is a static one, next is the 'menu' page and the 'login' page as well.
The menu page is exposing available menu, for most of the day or night there will be a La Carte menu visilible, but between 
12 and 5pm there is the Lunch menu and between 6 and 8pm displayed will be the dinner menu. This can be changed from Staff home page 
which is first after the login page. On the Menu page there is link as well to the all product menu including soft drinks and wine.
On this page I have included a few search buttons just as an example, so we have the Gluten Free option which querys by allergen
information included with the menu items, Vegetarian Menu querys menu items descriptions and Spicy Dishes again by the description.
On every menu available on the screen there is an option to have a better look at the dishes, by clicking on "i" letter or displayed
price (depends on the menu but links are clearly visible), here we have displayed the Name of the dish or drink, short description and allergens.
Next is login page, and after logging in the first page has the option to change visible menu to lunch, dinner, a La Carte or to reset it to 
default time orientated option. After logging in navbar gets longer. There is an option to add a new product to a menu. On the page there is 
a visible list of used Id's which I have used to sort out the display of the menu, and the grid to enter all informations about the product.
After submiting, the list of Id's is updated automaticaly and the added product can be visible on the menu page. Next on the navbar is updating the menu item link.
Here after choosing from drop down box, populate grid will display, and submited changes again will have an effect on the displyed menu. 
Here we can make our dish invisible for the public but still available in the database. And lastly the Sign out button to clear jsontoken. If we would like to go back 
to manipulate menu again we would need to log back in. 
I've used free bootstap template from https://startbootstrap.com/ to create this application and all images are licenced and copyright free found by 
browsing the internet.
