const User = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        const newUser = new User(req.body);
        console.log(newUser);

        newUser.save()
            .then(() => {
                console.log("Successful registration.");
                res.json({
                    message: "Thanks!  You successfully registered.",
                    user: newUser,
                })
            })
            .catch(() => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    login: (req, res) => {
        User.findOne({ email: req.body.email })
            .then((user) => {
                if (user === null) {
                    res.status(400).json({ message: "Invalid Login Attempt -1" })
                }
                else {
                    bcrypt.compare(req.body.password, user.password)
                        .then((isPasswordValid) => {
                            if (isPasswordValid === true) {
                                console.log("Password is valid.");
                                res.cookie("usertoken",
                                    jwt.sign({
                                        _id: user._id,
                                        username: user.username,
                                        email: user.email
                                    },
                                        proccess.env.JWT_SECRET), {
                                    httpOnly: true,
                                    expires: new Date(Date.now() + 900000000)
                                })
                                    .json({
                                        message: "Successfully logging in.",
                                        userLoggedIn: {
                                            username: user.username,
                                        }
                                    })
                            } else {
                                res.status(400).json({ message: "Invalid Login Atempt - 2" })
                            }
                        })
                        .catch((err) => {
                            res.status(400).json({ message: "Invalid Login Atempt - 3" })
                        })
                }
            })
            .catch((err) => {
                res.status(400).json({ message: "Invalid Login Attempt -4" })
            })
    },
    logout: (req, res) => {
        console.log("Logging out!");
        res.clearCookie("usertoken");
        res.json({ message: "You have successfully logged out of Wild Again." });
    }
}
