const config = require('config.json');

// users hardcoded for simplicity, store in a db for production applications
let comments = {};
let count = 0;

module.exports = {
    addComment,
    getCommentsById
};

async function addComment({ id_film, username, comment }) {

    let commentToAdd = {
        id: ++count,
        username: username,
        text: comment,
        date: new Date()
    };

    if (comments[id_film] != null)
        comments[id_film].list.push(commentToAdd);
    else
        comments[id_film] = {list: [commentToAdd]};

    const {text, ...commentWithoutText} = commentToAdd;
    return {
        success: true,
        comment: commentWithoutText
    }
}

async function getCommentsById(idFilm) {
    return (comments[idFilm] != null) ? comments[idFilm].list : [];
}
