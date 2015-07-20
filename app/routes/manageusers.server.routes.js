'use strict';
var users = require('../../app/controllers/manageusers.server.controller');
module.exports = function(app) {
	// Routing logic   
	// ...
    app.route('/reqs')
        .get(users.list);
        //.post(users.create);

    app.route('/reqs/:useId')
        .get(users.read)
        .delete(users.delete);

    app.param('useId', users.userByID);
};
