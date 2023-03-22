const router = require('express').Router();
const { 
    getThoughts, 
    getSingleThought, 
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController')

// getting all thoughts and creating thoughts
router
.route('/')
.get(getThoughts)
.post(createThought)

// getting, updating, and deleting thoughts by id
router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought)

// create reaction
router
.route('/:thoughtId/reactions/')
.post(createReaction)

// delete reaction
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;