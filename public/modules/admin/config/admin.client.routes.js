/**
 * Created by S521942 on 7/14/2015.
 */
'use strict';
//angular.module('admin').config(['$routeProvider',
//    function($routeProvider) {
//        $routeProvider.
//            when('/reqs', {
//                templateUrl: 'admin/views/view-users.client.view.html'
//            });
//            //when('/articles/create', {
//            //    templateUrl: 'articles/views/create-article.client.view.html'
//            //}).
//            //when('/articles/:articleId', {
//            //    templateUrl: 'articles/views/view-article.client.view.html'
//            //}).
//            //when('/articles/:articleId/edit', {
//            //    templateUrl: 'articles/views/edit-article.client.view.html'
//            //});
//    }
//]);
angular.module('admin').config(['$stateProvider',
    function($stateProvider) {
        // Articles state routing
        $stateProvider.
            state('listUsers', {
                url: '/reqs',
                templateUrl: 'modules/admin/views/view-users.client.view.html'
            });
            //state('createArticle', {
            //    url: '/articles/create',
            //    templateUrl: 'modules/articles/views/create-article.client.view.html'
            //}).
            //state('viewArticle', {
            //    url: '/articles/:articleId',
            //    templateUrl: 'modules/articles/views/view-article.client.view.html'
            //}).
            //state('editArticle', {
            //    url: '/articles/:articleId/edit',
            //    templateUrl: 'modules/articles/views/edit-article.client.view.html'
            //});
    }
]);
