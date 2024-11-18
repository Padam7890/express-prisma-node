const express = require('express');
const {getUser, createUser, homepage, login} = require('../controllers/user.controller');

const router  = express.Router();

//router below
router.get('/user', getUser)
router.post("/login", login )
router.get("/", homepage )
router.post('/user', createUser)



module.exports = router;


