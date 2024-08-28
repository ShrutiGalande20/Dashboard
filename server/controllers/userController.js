const user = require("../model/user");

exports.create = async(req, res)=> {
    const  {username, email, password} = req.body;

    const userData = new user ({
        username,
        email,
        password
    })
    await userData.save();
    res.status(201).(userData)
}