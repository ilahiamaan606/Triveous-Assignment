const jwt = require('jsonwebtoken');
require("dotenv").config();


const authorization = async (req, res, next) => {

    const token = req.headers.authorization;
    try {
        if (!token) {
            return res.status(401).json({ msg: "Please Login first" });
        }

        const decoded = jwt.verify(token, process.env.key);

        const userid = decoded.userid;
        req.body.userid=userid;
        next();
    }
    catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })

    }
}
module.exports = {
    authorization
}