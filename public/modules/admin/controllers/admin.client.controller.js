/**
 * Created by S521942 on 7/14/2015.
 */
'use strict';
angular.module('admin').controller('AdminController', ['$scope', '$stateParams', '$location', 'Authentication', 'admins',
    function($scope, $stateParams, $location, Authentication, admins) {
        $scope.authentication = Authentication;
        $scope.find = function() {
            $scope.users = admins.query();
        };
        $scope.findOne = function() {
            $scope.user = admins.get({
                useId: $stateParams.useId
            });
        };

        $scope.delete = function(user) {
            if (user) {
                user.$remove(function() {
                    for (var i in $scope.users) {
                        if ($scope.users[i] === user) {
                            $scope.users.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.user.$remove(function() {
                    $location.path('/reqs');
                });
            }
        };
    }
]);
