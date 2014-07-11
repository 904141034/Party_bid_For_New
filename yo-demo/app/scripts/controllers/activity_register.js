/**
 * Created by lishaodan on 14-7-11.
 */
angular.module('yoDemoApp')
    .controller('activity_registerCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return=function(){
            $location.path('/activity_list');
        }
    });