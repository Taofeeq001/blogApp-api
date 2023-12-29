require("dotenv").config();
const jwt = require('jsonwebtoken');



function auth(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}

module.exports = auth
// const jwt = require('jsonwebtoken');

// function auth(req, res, next) {
//     try {
//         const token = req.header('token');
//         if (!token) return res.status(401).send('Access Denied');

//         const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//         req.user = verified;
//         next();
//     } catch (error) {
//         console.error('Token verification error:', error);
//         res.status(400).send('Invalid Token');
//     }
// }

// module.exports = auth;
// const jwt = require('jsonwebtoken');

// function auth(req, res, next) {
//     try {
//         const token = req.header('token');
//         if (!token) return res.status(401).send('Access Denied');

//         console.log('Received token:', token); 
//         console.log('Token Secret:', process.env.TOKEN_SECRET);

//         const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//         req.user = verified;
//         // console.log(verified)
//         next();
//     } catch (error) {
//         console.error('Token verification error:', error);
//         res.status(400).send('Invalid Token');
//     }
// }

// module.exports = auth;
