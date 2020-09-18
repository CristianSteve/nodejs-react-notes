const {Router} = require('express');

const router = Router();
const { createUsers, getUsers, updateUsers, deleteUser } = require('../controllers/users.controller');

router.route('/')
        .get(getUsers)
        .post(createUsers);

router.route('/:id')
        .delete(deleteUser);
          
module.exports = router;