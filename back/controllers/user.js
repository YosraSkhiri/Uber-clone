const User = require('../models/User');

module.exports = {
    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.user);
            return res.status(200).json(user);
        } catch(error) {
            return res.status(500).json({ errors: ['A server error has accured, Please try again later.']});
        }
    }
}
