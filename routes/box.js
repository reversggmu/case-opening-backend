const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.get('/', (req,res) => {
    let box = req.body;
    query = 'select * from box';
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json({message: results});
        } else {
            return res.status(500).json(err);
        }
    });
});


router.get('/:id', (req,res) => {
    let box = req.body;
    let param = req.params.id;
    query = `select * from box where id = ${param}`;
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json({message: results});
        } else {
            return res.status(500).json(err);
        }
    });
});


router.post('/create', (req,res) => {
    let box = req.body;
    query = `select name from box where name = "${box.name}"`;

    connection.query(query, (err, results) => {
        if (!err) {
            if (results.length <=0) {
                query = 'insert into box (name, img, price, fee, items) values (?, ?, ?, ?, ?)';
                connection.query(query, [box.name, box.img, box.price, box.fee, box.items],(err, results) => {
                    if (!err){
                        return res.status(200).json({message: 'Successfully create box'});
                    } else {
                        return res.status(500).json(err);
                    }
                })
            } else {
                return res.status(400).json({message: "Box already exists!", results});
            }
        } else {
            return res.status(500).json(err);
        }
    });
    
});

module.exports = router;