const userCntrl = {};
const User = require('../models/User');

userCntrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userCntrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

userCntrl.createUser = async (req, res) => {
    const { username } = req.body;
    let user = await User({ username });
    user = user.save();
    res.json(user);
};

userCntrl.updateUser = async (req, res) => {
    const { username } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, {
        username
    });
    res.json(user);
};

userCntrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove({ _id: req.params.id });
    res.json('User deleted');
};

module.exports = userCntrl;