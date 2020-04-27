'use strict';

var mongoose = require('mongoose') // NOT USED
// Detta är en Highscore Model
const Highscore = require('../models/highscoreModel')
// const Highscore = mongoose.model('Highscore');


exports.list_all_highscores = function (req, res) {
    Highscore.find({}, function (err, score) {
        if (err)
            res.send(err);
        res.json(score);
    });
};




exports.create_a_highscore = function (req, res) {
    var new_highscore = new Highscore(req.body);
    new_highscore.save(function (err, score) {
        if (err)
            res.send(err);
        res.json(score);
    });
};


exports.read_a_highscore = function (req, res) {
    Highscore.findById(req.params.highscoreId, function (err, score) {
        if (err)
            res.send(err);
        res.json(score);
    });
};


exports.update_a_highscore = function (req, res) {
    Highscore.findOneAndUpdate({
        _id: req.params.highscoreId
    }, req.body, {
            new: true
        }, function (err, score) {
            if (err)
                res.send(err);
            res.json(score);
        });
};


exports.delete_a_highScore = function (req, res) {
    Highscore.remove({
        _id: req.params.highscoreId
    }, function (err, score) {
        if (err)
            res.send(err);
        res.json({
            message: 'Highscore successfully deleted'
        });
    });
};