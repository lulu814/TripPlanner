const userServices = require("../services/users-service");
const config = require("../config/auth.config");
const User = require("../models/users/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = function (app) {
    const signup = (req, res) => {
        const user = new User({
            username:req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            role: req.body.role,
            text: ""
        });
        user.save((err, user) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }
            res.send({message: "User was registered successfully!"});
        })
    }

    const signin = (req, res) => {
        User.findOne({username: req.body.username})
            .exec((err, user) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }
                if (!user) {
                    return res.status(404).send({message: "User Not found."});
                }
                const passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );

                if (!passwordIsValid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
                }

                const token = jwt.sign({id: user.id}, config.secret, {
                    expiresIn: 86400 // 24 hours
                });
                res.status(200).send({
                    user,
                    accessToken: token
                });
            });
    }

    const updateProfile = (req, res) => {
        const user = req.body;
        user.password = bcrypt.hashSync(user.password, 8);
        console.log("update profile -> ", user);
        // User.update({email: user.email}, {$set: {fName: 'change'}})
        User.findOneAndUpdate({_id:user._id}, {$set: user}, {new: true}, (err) => {
            if (err) {
                console.log(err)
            }
        });
        res.status(200).send('Update profile successfully');
    };

    const findPublicProfile = (req, res) => {
        User.findOne({_id: req.params.uid}, function (err, user){
            if (err) throw err;
            console.log(user);
            res.send(user);
        });
    }

    app.post("/signup", userServices.checkDuplicateUsername, signup);
    app.post("/signin", signin);
    app.put('/profile', userServices.verifyToken, updateProfile);
    app.get('/api/public-profile/:uid', findPublicProfile);

}

