const express = require('express');
const {getUser, createUser, homepage} = require('../controllers/user.controller');

const router  = express.Router();

//router below
router.get('/user', getUser)
router.get("/", homepage )
router.post('/user', createUser)



module.exports = router;


