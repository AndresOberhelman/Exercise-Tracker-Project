const router = require('express').Router();
let User = require('../models/user.model');
router.route('/').get((req,res) => { //get request
    User.find() //finds user in database
    .then(users=>res.json(users)) //return users in json format
    .catch(err =>res.status(400).json('Error: ' + err)) //return error if user not found
});

router.route('/add').post((req,res) =>{ //get request
    const username = req.body.username; //new username
    const newUser = new User({username}); // create new user instance

    newUser.save() //save to new  user database
        .then(() =>res.json('User added!'))
        .catch((err=>res.status(400).json('Error: ' + err)));
});
//no update or delete as of yet
module.exports = router;