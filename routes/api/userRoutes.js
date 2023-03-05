const router = require('express').Router();

const { 
    getUser, 
    getSingleUser, 
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController')

// getting a user and creating a new user, more basic, no need for id
router
.route('/')
.get(getUser)
.post(createUser)

// updating user information through Id
router
.route('/:id')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)

// adding a friend
router
.route('/:thoughtId/reactions')
.post(addFriend)

// removing a friend
router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeFriend)

module.exports = router;