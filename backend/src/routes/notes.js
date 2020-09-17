const {Router} = require('express');

const router = Router();
const { createNotes, getNotes, updateNotes,
        getNoteUnique } = require('../controllers/notes.controller');

router.route('/')
        .get(getNotes)
        .post(createNotes);

router.route('/:id')
        .get(getNoteUnique)
        .put(updateNotes)
          
module.exports = router;