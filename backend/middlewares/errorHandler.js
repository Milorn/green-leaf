
module.exports = (handler) => (req, res, next) => {
    handler()
        .catch(err => next(err));
}