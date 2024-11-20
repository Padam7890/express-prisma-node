const express = require('express');
const {getUser, createUser, homepage, login} = require('../controllers/user.controller');
const checkAuth = require('../middleware/checkAuth');

const router  = express.Router();

//router below
router.get('/user',checkAuth, getUser)
router.post("/login", login )
router.get("/", homepage )
router.post('/user', createUser)



module.exports = router;


