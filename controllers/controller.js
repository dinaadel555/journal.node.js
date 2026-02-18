const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const hashed = await bcrypt.hash(req.body.password, 10);

    const token = jwt.sign({email : req.body.email}, 
        process.env.JWT_SECRET, {expiresIn : '1h'});

    const user = await user.create({
...req.body,
        password : hashed,
        confirmationToken : token,
    });

    await sendEmail(req.body.email, token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    userId = decoded.userId;

    res.json({message : 'User created, please check your email to confirm your account'});
};
