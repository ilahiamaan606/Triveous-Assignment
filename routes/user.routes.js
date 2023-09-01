const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { UserModel } = require("../models/user.models");
require("dotenv").config();

const userrouter = express.Router();


userrouter.post("/signup", async (req, res) => {
    try {
        let { email, password } = req.body;

        const userexist = await UserModel.findOne({ email })

        if (userexist) {
            return res.status(400).json({ "msg": "Sorry, email already registered." })
        }

        bcrypt.hash(password, 2, async function (err, hash) {
            if (err) {
                return res.send({ "msg": err })
            }

            const user = new UserModel({ email, password: hash })
            await user.save()
            return res.send({ "msg": "User registered successfully." })

        })

    } catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })
    }

})

userrouter.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;

        const userexist = await UserModel.findOne({ email });

        if (userexist) {

            bcrypt.compare(password, userexist.password, function (err, result) {
                if (result) {
                    let token = jwt.sign({ userid: userexist._id }, process.env.key);
                    res.send({ msg: "Login Succsess", token })
                }
                else {
                    res.send({ msg: "Wrong Password" })
                }
            });
        }
        else {
            res.send({ msg: "User doesn't exist" })
        }


    } catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })
    }
})



module.exports = { userrouter }