const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/signup', (req,res) => {
    let user = req.body;
    query = 'select email,password,role from user where email=?';
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <=0) {
                query = 'insert into user (name, email, password,role) values (?,?,?,"user")';
                connection.query(query, [user.name, user.email, user.password],(err, results) => {
                    if (!err){
                        return res.status(200).json({message: 'Successfully registered'});
                    } else {
                        return res.status(500).json(err);
                    }
                })
            } else {
                return res.status(400).json({message: "Email already exists!"});
            }
        } else {
            return res.status(500).json(err);
        }
    });
    
});

router.get('/information/:id', (req,res) => {
    let box = req.body;
    let userId = req.params.id;
    query = `select user_seed, nonce from user where id = ${userId}`;
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json({message: results});
        } else {
            return res.status(500).json(err);
        }
    });
});

router.put('/information/:id', (req,res) => {
    let box = req.body;
    let userId = req.params.id;
    let param = req.body;
    query = `update user set nonce = ${param.nonce} where id = ${userId}`;
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json({message: results});
        } else {
            return res.status(500).json(err);
        }
    });
});

module.exports = router;