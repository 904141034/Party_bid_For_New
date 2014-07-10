/**
 * Created by lishaodan on 14-7-9.
 */
angular.module('yoDemoApp')
    .controller('activity_listCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ]

        $scope.activity=[{'name':null}];


    });