const userServices = require("../services/users-service");
const config = require("../config/auth.config");
const User = require("../models/users/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = function (app) {
    const signup = (req, res) => {
        const user = new User({
            email: req.body.email,
            fName: req.body.fName,
            lName: req.body.lName,
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
        console.log(req.body)
        User.findOne({email: req.body.email})
            .exec((err, user) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }
                if (!user) {
                    console.log(user);
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
        console.log("update profile -> ", user);
        // User.update({email: user.email}, {$set: {fName: 'change'}})
        User.findOneAndUpdate({email: user.email}, {fName: 'change'}), (err, _) => {
            console.log("entering ...");
            if (err) {
                res.send(err);
                console.log("error updating");
                return;
            }
            console.log("no error updating")
            res.status(200).send('Update profile successfully');
        }
    };

    app.post("/signup", userServices.checkDuplicateEmail, signup);
    app.post("/signin", signin);
    app.put('/profile', userServices.verifyToken, updateProfile);

}

