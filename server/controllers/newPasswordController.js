const utils = require('../utils/utils');
const randomString = utils.generateRandomString(10000000, 90000000);
let password;

exports.getPassword = () => {
    return password;
};

exports.newPassword = (req, res) => {
    password = randomString.toString();
    console.log("password generated ", password);
    const hint = utils.shuffleString(password);
    return res.status(200).json({
        hint: hint
    });
};