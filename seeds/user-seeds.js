const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: 'hector',
        email: 'hector@gmail.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;