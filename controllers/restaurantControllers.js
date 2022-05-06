const req = require('express/lib/request');
const menuDAO = require('../models/menuModel');
const db = new menuDAO();
db.init();

exports.home_page = (req,res)=>{
    res.render("navbar/home",{
                title: "Home Page"
            });
            console.log('promise resolve');
}

exports.map=(req,res)=>{
    res.render("navbar/map",{
               title:"Find Us"});
}

exports.about_page = (req,res)=>{
    res.render("navbar/about",{
                title: "About Page"
            });
            console.log('promise resolve');
}

const date= new Date;
let time = date.getHours();
console.log(time);

exports.menuChoice = (req,res)=>{
    time = req.body.menu;
    console.log(time);
    res.redirect("/menu");
}


exports.menu_page = (req,res)=>{
    if(time>=12 && time<=17){
        db.getLunchEntries()
        .then((list)=>{
            res.render("menu/lunch",{
                title: "Menu",
                entries: list
            });
            console.log('promise resolve');
        })
        .catch((err)=>{
            console.log('promise rejected', err);
        })
        
    }else if(time>=18 && time<=20){
    db.getDinnerEntries()
        .then((list)=>{
            res.render("menu/dinner",{
                title: "Menu",
                entries: list
            });
            console.log('promise resolve');
        })
        .catch((err)=>{
            console.log('promise rejected', err);
        })
    }else{
        db.getAllFoodEntries()
        .then((list)=>{
            res.render("menu/aLaCart",{
                title: "Menu",
                entries: list
            });
            console.log('promise resolve');
        })
        .catch((err)=>{
            console.log('promise rejected', err);
        })
    }
}

exports.getGlutenFree=(req,res)=>{
    console.log("gluten");
    db.getNoGluten()
    .then((list)=>{
        res.render("menu/allmenus",{
            title: "Gluten Free",
            entries: list
        });
    })
    .catch((err)=>{
        console.log(err);
    })
};

exports.getSpicy=(req,res)=>{
    console.log("spicy");
    db.getSpicy()
    .then((list)=>{
        res.render("menu/allmenus",{
            title: "Spicy Food",
            entries: list
        });
    })
    .catch((err)=>{
        console.log(err);
    })
};

exports.getVegetarian=(req,res)=>{
    console.log("veg");
    db.getVegetarian()
    .then((list)=>{
        res.render("menu/allmenus",{
            title: "Vegetarian Menu",
            entries: list
        });
    })
    .catch((err)=>{
        console.log(err);
    })
};

exports.allmenus_page = (req,res)=>{
    db.getAllAvailableEntries()
    .then((list)=>{
        res.render("menu/allmenus",{
            title: "Menu",
            entries: list
        });
        console.log('promise resolve');
    })
    .catch((err)=>{
        console.log('promise rejected', err);
    })
};


exports.login_page = (req,res)=>{
    res.render("navbar/login",{
                title: "Login Page"
            });
    console.log('promise resolve');
}

exports.handle_login = (req,res)=>{
    res.render("navbar/staffHome",{
        title: "Staff Home",
        user: "user"
    });
}

exports.staffHome_page = (req,res)=>{
    res.render("navbar/staffHome",{
        title: "Staff Home",
        user: "user"
    });
}

exports.logout = function (req, res) {
    res.clearCookie("jwt").status(200).redirect("/");
  };

exports.new_entries = (req,res)=>{
    db.getAllEntries().then((list)=>{
        res.render('dish/new',{
        title: "Add New Item",
        entries: list,
        user: "user"
    });
    console.log('promise resolve');
    })
    .catch((err)=>{
        console.log('promise rejected', err);
    });
};
    
exports.post_new_entry = (req, res)=> {
    console.log('processing post-new_entry controller');
    if (!req.body.name) {
    response.status(400).send("Entries must have an name.");
    return;
        }
    db.addNewItem(req.body.id, req.body.available, req.body.product,
        req.body.dishType, req.body.name, req.body.price,
        req.body.description, req.body.allergen, req.body.lunch, req.body.dinner);
        db.getAllEntries().then((list)=>{
            res.render('dish/new',{
            title: "Add New Item",
            entries: list,
            user: "user"
        });
        console.log('promise resolve');
        })
        .catch((err)=>{
            console.log('promise rejected', err);
        });
};

exports.updateMenuItem = (req,res)=>{
    db.getEntriesToUpdate().then((list)=>{
        res.render("dish/update",{
                title: "Update",
                dishes:list,
                user:'user'
            });console.log('promise resolve');
    }).catch((err)=>{
        console.log('promise rejected', err);
    });    
};

exports.loadItemDetails = (req,res)=>{
    console.log('id = ', req.params.id);
    let id = req.params.id;
    db.getEntriesBy_Id(id).then(
        (entries) => {
            res.render("dish/update", {
                title: "Update Item",
                user: "user",
                entries: entries
            });
        }).catch((err)=>{
            console.log('error handling author posts', err);
        });
};

exports.loadDishDetails = (req,res)=>{
    console.log('name = ', req.params.name);
    let dish = req.params.name;
    db.getEntriesBy_Name(dish).then(
        (entries) => {
            res.render("dish/details", {
                title: "Dish Details",
                entries: entries,
            });
        }).catch((err)=>{
            console.log('error handling author posts', err);
        });
};

exports.post_updateMenuItem = (req,res)=>{
    console.log('post update');
    db.update(req.body._id, req.body.id, req.body.available, req.body.product,
        req.body.dishType, req.body.name, req.body.price,
        req.body.description, req.body.allergen, req.body.lunch, req.body.dinner)
        db.getEntriesToUpdate().then((list)=>{
            res.render("dish/update",{
                    title: "Update",
                    dishes:list,
                    user:'user'
                });console.log('promise resolve');
        }).catch((err)=>{
            console.log('promise rejected', err);
        });
};

   


