const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.get('/', (req,res) => {
    let query = 'select * from history';
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json({message: results});
        } else {
            return res.status(500).json(err);
        }
    });
});

router.post('/', (req,res) => {
    let param = req.body;
    query = 'insert into history (id_user, server_seed, user_seed, nonce, hash, item) values ("1",?,?,?,?,?)';
    connection.query(query, [param.server_seed, param.user_seed, param.nonce, param.hash, param.item], (err, results) => {
        if (!err){
            return res.status(200).json({message: 'Successfully added'});
        } else {
            return res.status(500).json(err);
        }
    });
});

module.exports = router;