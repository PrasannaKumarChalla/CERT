'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

/**
 * Create a Manageuser
 /**
 * Created by s521942 on 7/19/2015.
 */
var User = mongoose.model('User');
var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};
exports.list = function(req, res) {
    User.find().sort('-created').exec(function(err, users) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(users);
        }
    });
};
exports.userByID = function(req, res, next, id) {
    User.findById(id).exec(function(err, user) {
        if (err) return next(err);
        if (!user) return next(new Error('Failed to load user ' + id));

        req.user = user;
        next();
    });
};
exports.read = function(req, res) {
    res.json(req.user);
};
exports.delete = function(req, res) {
    var user = req.user;

    user.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(user);
        }
    });
};
