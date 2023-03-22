const router = require('express').Router()
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
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)

// adding/deleting a friend
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)

module.exports = router;