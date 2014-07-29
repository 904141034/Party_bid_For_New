'use strict';
/**
 * Created by lishaodan on 14-7-11.
 */
angular.module('yoDemoApp')
    .controller('activity_registerCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //返回按钮
        $scope.return = function () {
            $location.path('/activity_list');
        };
        //开始结束按钮事件
        $scope.start = function () {
            Activity.Start_StopButton($scope,$location);
        };
        $scope.bmMessages=Activity.return_bmMessages();
        $scope.registerNum=Activity.return_bmMessages().length;
        Activity.ActActivity($scope);
        //refresh方法刷新页面
        $scope.refresh = function () {
            $scope.bmMessages=Activity.return_bmMessages();
            $scope.registerNum=Activity.return_bmMessages().length;
        };
    });