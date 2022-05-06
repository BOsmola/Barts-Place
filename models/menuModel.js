const { rejects } = require('assert');
const nedb= require('nedb');
const { resolve } = require('path');

class Menu{

    constructor(dbFilePath){
        if(dbFilePath){
            this.db= new Nedb({filename:dbFilePath, autoload: true});
            console.log('DB connected to' +dbFilePath);
        }else{
            this.db = new nedb();
        }
    }

    init(){
        this.db.insert({
            id:'10',
            product:'food',
            name:'Starters',
            lunch:'yes',
            dinner:'yes',
            available:'yes'
        })
        this.db.insert({
            id:'11',
            product:'food',
            dishType:'Starter',
            name:'Calamari',
            price: '£5.99',
            description:'Deep Fried Squid',
            allergen:'Gluten, Fish',
            lunch:'yes',
            dinner:'yes',
            available:'yes'
        });
        console.log('1 lunch entry inserted');

        this.db.insert({
            id:'12',
            product:'food',
            dishType:'Starter',
            name:'Cauliflower Bites',
            price: '£4.99',
            description:'Deep Fried Cauliflower Florets',
            allergen:'Gluten',
            lunch:'yes',
            dinner:'no',
            available:'yes'
        });
        console.log('2 lunch entry inserted');

        this.db.insert({
            id:'13',
            product:'food',
            dishType:'Starter',
            name:'Bruschetta',
            price: '£5.99',
            description:'Tomato and Basil on Sourdough Bread',
            allergen:'Gluten',
            lunch:'no',
            dinner:'yes',
            available:'yes'
        });
        console.log('3 lunch entry inserted');

        this.db.insert({
            id:'19',
            product:'food',
            lunch:'yes',
            dinner:'yes',
            available:'yes'
        })

        this.db.insert({
            id:'20',
            product:'food',
            name:'Mains',
            lunch:'yes',
            dinner:'yes',
            available:'yes'
        })
        this.db.insert({
            id:'21',
            product:'food',
            dishType:'Main',
            name:'Chicken Enchilada',
            price: '£12.99',
            description:'Spicy Chicken, Onions and Peppers Wrap in Tortilla Serve on Rice Bed',
            allergen:'Gluten, Dairy',
            lunch:'yes',
            dinner:'yes',
            available:'yes'
        });
        console.log('1 dinner entry inserted');

        this.db.insert({
            id:'22',
            product:'food',
            dishType:'Main',
            name:'Spaghetti Arrabiata',
            price: '£10.99',
            description:'Pasta in Spicy Tomato Sauce',
            allergen:'Gluten',
            lunch:'yes',
            dinner:'no',
            available:'yes'
        });
        console.log('2 dinner entry inserted');

        this.db.insert({
            id:'23',
            product:'food',
            dishType:'Main',
            name:'Beef Bourguignon',
            price: '£14.99',
            description:'Beef Stew with Onions and Mushroom in Tomato Sauce',
            allergen:'none',
            lunch:'no',
            dinner:'yes',
            available:'yes'
        });
        console.log('3 dinner entry inserted');

        this.db.insert({
            id:'29',
            product:'food',
            lunch:'yes',
            dinner:'yes',
            available:'yes'
        })

        this.db.insert({
            id:'30',
            product:'food',
            name:'Desserts',
            available:'yes'
        })

        this.db.insert({
            id:'31',
            product:'food',
            dishType:'Dessert',
            name:'Ice Creams',
            price: '£4.99',
            description:'Selection of Our Home Made IceCreams',
            allergen:'Dairy',
            lunch:'no',
            dinner:'no',
            available:'yes'
        });
        console.log('1 dessert entry inserted');

        this.db.insert({
            id:'32',
            product:'food',
            dishType:'Dessert',
            name:'Carrot Cake',
            price: '£5.99',
            description:'Cake with icing',
            allergen:'Gluten, Dairy',
            lunch:'no',
            dinner:'no',
            available:'yes'
        });
        console.log('2 dessert entry inserted');

        this.db.insert({
            id:'33',
            product:'food',
            dishType:'Dessert',
            name:'Churros',
            price: '£5.99',
            description:'Deep Fried Doughnut Dough serve with Cinnamon Sugar and Chocolate Sauce',
            allergen:'Gluten, Dairy',
            lunch:'no',
            dinner:'no',
            available:'yes'
        });
        console.log('3 dessert entry inserted');

        this.db.insert({
            id:'39',
            product:'food',
            lunch:'yes',
            dinner:'yes',
            available:'yes'
        })

        this.db.insert({
            id:'40',
            product:'drink',
            name:'Soft Drinks',
            available:'yes'
        })

        this.db.insert({
            id:'41',
            product:'drink',
            dishType:'Soft Drink',
            name:'Coca Cola',
            price: '£2.99',
            lunch:'no',
            dinner:'no',
            available:'yes'
        });
        console.log('1 soft drink entry inserted');

        this.db.insert({
            id:'42',
            product:'drink',
            dishType:'Soft Drink',
            name:'Orange Juice',
            price: '£2.99',
            lunch:'no',
            dinner:'no',
            available:'yes'
        });
        console.log('2 soft drink entry inserted');

        this.db.insert({
            id:'43',
            product:'drink',
            dishType:'Soft Drink',
            name:'Irn Bru',
            price: '£2.99',
            lunch:'no',
            dinner:'no',
            available:'yes'
        });
        console.log('3 soft drink entry inserted');

        this.db.insert({
            id:'49',
            product:'drink',
            available:'yes'
        })

        this.db.insert({
            id:'50',
            product:'drink',
            name:'Wine',
            available:'yes'
        })

        this.db.insert({
            id:'51',
            product:'drink',
            dishType:'Wine',
            name:'Gavi di Gavi',
            price: '£7.99',
            lunch:'no',
            dinner:'no',
            available:'yes'
        });
        console.log('1 wine entry inserted');

        this.db.insert({
            id:'52',
            product:'drink',
            dishType:'Wine',
            name:'Malbec',
            price: '£8.99',
            lunch:'no',
            dinner:'no',
            available:'yes'
        });
        console.log('2 wine entry inserted');

        this.db.insert({
            id:'53',
            product:'drink',
            dishType:'Wine',
            name:'Pink Zinfandel',
            price: '£6.99',
            lunch:'no',
            dinner:'no',
            available:'yes'
        });
        console.log('3 wine entry inserted');

        this.db.insert({
            id:'59',
            product:'drink',
            available:'yes'
        })

    }

    
    getAllFoodEntries(){
        return new Promise((resolve,reject)=>{
            this.db.find({'product':'food','available':'yes'}).sort({id:1}).exec((err,entries)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(entries);
                }
            })
        })
    }

    getSpicy(){
        return new Promise((resolve,reject)=>{
            this.db.find({description:/Spicy/,product:'food',available:'yes'}).sort({id:1}).exec((err,entries)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(entries)
                }
                console.log(entries);
            })
        })
    }

    getNoGluten(){
        return new Promise((resolve,reject)=>{
            this.db.find({$not:{allergen:/Gluten/},product:'food',available:'yes'}).sort({id:1}).exec((err,entries)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(entries)
                }
                console.log(entries);
            })
        })
    }

    getVegetarian(){
        return new Promise((resolve,reject)=>{
            this.db.find({$and:[{$not:{description:/Chicken/}},{$not:{description:/Squid/}},{$not:{description:/Beef/}}],product:'food',available:'yes'}).sort({id:1}).exec((err,entries)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(entries)
                }
                console.log(entries);
            })
        })
    }

    getLunchEntries(){
        return new Promise((resolve, reject)=>{
            this.db.find({'lunch': 'yes',available:'yes'}).sort({id:1}).exec((err,entries)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(entries);
                }
            })
        })
    }


    getDinnerEntries(){
        return new Promise((resolve, reject)=>{
            this.db.find({'dinner': 'yes',available:'yes'}).sort({id:1}).exec((err,entries)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(entries);
                }
            })
        })
    }


    getAllEntries(){
        return new Promise((resolve,reject)=>{
            this.db.find({}).sort({id:1}).exec((err,entries)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(entries);
                    console.log(entries);
                }
            })
        })
    }

    getAllAvailableEntries(){
        return new Promise((resolve,reject)=>{
            this.db.find({available:'yes'}).sort({id:1}).exec((err,entries)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(entries);
                    console.log(entries);
                }
            })
        })
    }

    getEntriesBy_Id(id){
        return new Promise((resolve, reject)=>{
            this.db.find({'id': id},(err,entries)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(entries);
                    console.log(entries);
                }
            })
        })
    }

    getEntriesBy_Name(dish){
        return new Promise((resolve, reject)=>{
            this.db.find({'name': dish},(err,entries)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(entries);
                    console.log(entries);
                }
            })
        })
    }

    addNewItem(id, available, product, dishType, name, price, description, allergen, lunch, dinner) {
        var entry = {
        id: id,
        available: available,
        product: product,
        dishType: dishType,
        name: name,
        price: price,
        description: description,
        allergen: allergen,
        lunch: lunch,
        dinner: dinner
        }
        console.log('entry created', entry);
        this.db.insert(entry, function(err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        })
    }

    
    getEntriesToUpdate(){
        return new Promise((resolve,reject)=>{
            this.db.find({price: { $exists: true }}).sort({id:1}).exec((err,entries)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(entries);
                    console.log('function all() returns: ',entries);
                }
            })
        })
    }

    update(_id, id, available, product, dishType, name, price, description, allergen, lunch, dinner){
        var entry = {
            _id:_id,
            id: id,
            available: available,
            product: product,
            dishType: dishType,
            name: name,
            price: price,
            description: description,
            allergen: allergen,
            lunch: lunch,
            dinner: dinner
            }
        console.log('keep working');
        this.db.update({ _id: entry._id },{ $set: { 
            id:entry.id,
            available:entry.available,
            product:entry.product,
            dishType:entry.dishType, 
            name: entry.name, 
            price:entry.price,
            description:entry.description, 
            allergen:entry.allergen, 
            lunch:entry.lunch, 
            dinner:entry.dinner  
             } },
          {},
          (err, docs) => {
            if (err) {
              console.log("error updating document", err);
            } else {
              console.log(docs, "documents updated");
            }
          }
        )}



}
//make the module visible
module.exports=Menu;