const { User, Thought }  = require('../models');


const userController = {

// get all users
getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

// get single user
getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('friends')
      .populate('thoughts')
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

// create a user
createUser(req, res) {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
  },

// update a user
updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

// delete a user
deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: "Success! User and Thoughts deleted" }))
      .catch((err) => res.status(500).json(err));
},

// add a friend!
addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
    .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

// remove a friend :(
removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { friends: {friendId: req.params.friendId} } },
      { runValidators: true, new: true }
    )
    .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

};


module.exports = userController;