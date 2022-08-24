const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.get("/", function(req, res){
  user.findAll({raw: true }).then(data=>{
    res.status(200).json();
  }).catch(err=>console.log(err));
});

export default router;
