const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantControllers');
const {login} = require('../auth/auth')
const {verify} = require('../auth/auth')

const { append } = require('express/lib/response');

router.get('/', controller.home_page);
router.get('/about', controller.about_page);
router.get('/menu', controller.menu_page);
router.get('/allmenu', controller.allmenus_page);

router.get('/login', controller.login_page);
router.post('/login', login, controller.handle_login);
router.get('/staffHome', verify, controller.staffHome_page);
router.get("/logout", controller.logout);

router.get('/new', verify, controller.new_entries);
router.post('/new', verify, controller.post_new_entry);

router.get('/update', verify, controller.updateMenuItem);
router.get('/post/:id', verify, controller.loadItemDetails);
router.post('/updateItem', verify, controller.post_updateMenuItem);

router.get('/posts/:name', controller.loadDishDetails);

router.post('/menuChoice', verify, controller.menuChoice);

router.get('/map', controller.map);

router.get('/glutenFree', controller.getGlutenFree);
router.get('/vegetarian', controller.getVegetarian);
router.get('/spicy', controller.getSpicy);


router.use((req,res)=>{
    res.status(404);
    res.type('text/plain');
    res.send('404 Not Found.');
})

router.use((err,req,res,next)=>{
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})



////////////////////////////////////////////

module.exports = router;