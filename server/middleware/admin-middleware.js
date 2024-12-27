const verifyToken = require('./auth');

const verifyAdmin = (req, res, next) => {
    try {
        console.log(req.user && req.user.isAdmin);
        res.status(200).json({ msg: req.user.isAdmin })

    } catch (error) {
        next(error)
    }
};

module.exports = [verifyToken, verifyAdmin];