const express = require('express');
const router = express.Router();
const filmsService = require('./films.service');

// routes
router.post('/comments/add', addComment);
router.get('/comments', getAll);

module.exports = router;

function addComment(req, res, next) {
    filmsService.addComment(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    filmsService.getCommentsById(req.query.id)
        .then(comments => res.json(comments))
        .catch(err => next(err));
}
