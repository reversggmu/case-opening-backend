const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.get('/', (req,res) => {
    let weapon = req.body;
    query = 'select * from weapon';
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json({message: results});
        } else {
            return res.status(500).json(err);
        }
    });
    
});

router.post('/create', (req,res) => {
    let weapon = req.body;
    query = 'select name from weapon';
    connection.query(query, (err, results) => {
        if (!err) {
            if (results.length <=0) {
                query = 'insert into weapon (name) values (?)';
                connection.query(query, [weapon.name],(err, results) => {
                    if (!err){
                        return res.status(200).json({message: 'Successfully create weapon'});
                    } else {
                        return res.status(500).json(err);
                    }
                })
            } else {
                return res.status(400).json({message: "Weapon already exists!"});
            }
        } else {
            return res.status(500).json(err);
        }
    });
    
});

module.exports = router;