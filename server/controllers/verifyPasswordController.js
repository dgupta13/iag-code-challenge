const newPswrdController = require('./newPasswordController');
const utils = require('../utils/utils');

exports.verifyPassword = (req, res) => {
    const password = newPswrdController.getPassword();
    const correct = password === req.body.answer ? true : false;
    const matchedCharsArray = utils.getMatchingCharsArray(req.body.answer, password);
    const responsePayload = {
        ...(((matchedCharsArray.length > 0 && !correct ) || !correct) && {hightlight: matchedCharsArray}),
        correct: correct,
        hint: req.body.hint,
        answer: req.body.answer
    }
    res.status(200).json(responsePayload);
};