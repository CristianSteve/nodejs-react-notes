const {Router} = require('express');

const router = Router();
const { createUsers, getUsers, updateUsers } = require('../controllers/users.controller');

router.route('/')
        .get(getUsers)
        .post(createUsers);
          
module.exports = router;