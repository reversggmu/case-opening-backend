const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.get('/', (req,res) => {
    let box = req.body;
    query = 'select * from skin';
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json({message: results});
        } else {
            return res.status(500).json(err);
        }
    });
});

router.get('/:id', (req,res) => {
    let skinId = req.params.id;
    query = `select * from skin where id=${skinId}`;
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json({message: results});
        } else {
            return res.status(500).json(err);
        }
    });
});

router.post('/create', (req,res) => {
    let skin = req.body;
    query = `select name, quality from skin where name="${skin.name}" AND quality = "${skin.quality}"`;



    connection.query(query, (err, results) => {
        if (!err) {
            if (results.length <=0) {
                query = 'insert into skin (name, img, quality, price, weaponId) values (?, ?, ?, ?, ?)';
                connection.query(query, [skin.name, skin.img, skin.quality, skin.price, skin.weaponId],(err, results) => {
                    if (!err){
                        return res.status(200).json({message: 'Successfully create skin'});
                    } else {
                        return res.status(500).json(err);
                    }
                })
            } else {
                return res.status(400).json({message: "Skin already exists!", results});
            }
        } else {
            return res.status(500).json(err);
        }
    });
    
});
module.exports = router;