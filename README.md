# Barts-Place
CW2 for Web Development 2 Glasgow Caledonian Uni year 3
Application is deploy using Heroku.com and can be find on:
https://barts-place.herokuapp.com/
For demonstration purpous username and password is: "admin"
password is bcrypt using 12 rounds

Application welcome you with home page of the restaurant with some general information about it
openning hours, localization, telephone number (all of them fictitious). From here, using the link,
you can go to embedded Google map link with localization of the restaurant. There is navbar on top of the screen
to the next pages, so we have About page which is a static one, next is menu page and login one as well.
Menu page is exposing available menu, for most of the day or night there will be a La Card menu visilible, but between 
12 and 5pm there is Lunch menu and between 6 and 8pm will be displayed dinner menu. This can be change from Staff home page 
which is first after login. On Menu page there is link as well to all product menu including soft drinks and wine.
On this page I have included few search buttons just as an example, so we have Gluten Free option which quary by allergen
information include about the menu items, Vegetarian Menu quaring menu items descriptions and Spicy Dishes again by the description.
On every menu available on the screen there is an option to have a better look on the dishes, and by clicking on "i" letter or displayed
price (depends on the menu but links are clearly visible), here we have displayed Name of the dish or drink, short description and allergens.
Next is logging page, and after logging in the first page hss option to change visible menu to lunch, dinner, a La Card or to reset it to 
default time orientated option. After logging in navbar are getting longer. First is an option to add new product to a menu. On the page there is 
visible list of used Id's which I have used to sort out display of the menu and the grid to enter all informations about the product.
After submiting list of Id's is updated automaticaly and inserted product can be visible on the menu page. Next on the navbar is updating the menu item link.
Here after choosing from drop down box, populate grid will display and submited changes again will have an effect on displyed menu. 
Here we can make our dish invisible for the public but still available in database. And lastly Sign out button to clear jsontoken. If we would like to go back 
to manipulate menu again we would need to log in back on. 
I've used free bootstap template from https://startbootstrap.com/ to create this application and all images was licence and copyright free found by 
browsing the internet.
