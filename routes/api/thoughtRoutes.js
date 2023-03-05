const router = require('express').Router();


const { 
    getAllThoughts, 
    getThoughtById, 
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController')

// getting all thoughts and creating thoughts
router
.route('/')
.get(getAllThoughts)
.post(createThought)

// getting, updating, and deleting thoughts by id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

// create reaction
router
.route('/:thoughtId/reactions')
.post(createReaction)

// delete reaction
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;