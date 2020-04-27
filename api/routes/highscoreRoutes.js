'use strict';
var Highscore = require('../controllers/highscoreController');

module.exports = function (app) {

    // highscore Routes
    app.route('/highscore')
        .get(Highscore.list_all_highscores)
        .post(Highscore.create_a_highscore);


    app.route('/highscore/:highscoreId')
        .get(Highscore.read_a_highscore)
        .put(Highscore.update_a_highscore)
        .delete(Highscore.delete_a_highScore);
};