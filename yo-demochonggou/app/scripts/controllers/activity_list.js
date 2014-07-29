'use strict';
/**
 * Created by lishaodan on 14-7-9.
 */
angular.module('yoDemoApp')
    .controller('activity_listCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //活动为空直接跳转创建活动
        if (Activity.getLength()=="false") {
            $location.path('/activity_create');
        };
        Activity.list_activities($scope);
        //创建活动
        $scope.createActivity = function () {
            $location.path('/activity_create');
        };
        //点击单个活动事件
        $scope.activity_register = function (name) {

            //活动名传值
            Activity.activity_register(name);
            $location.path('/activity_register');
        }

    });