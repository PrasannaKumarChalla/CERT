/**
 * Created by S521942 on 7/14/2015.
 */
'use strict';
angular.module('admin').factory('admins', ['$resource', function($resource) {
    return $resource('/reqs/:useId', {
        useId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
