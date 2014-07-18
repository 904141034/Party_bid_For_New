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
        // 活动列表赋值
        var activities = JSON.parse(localStorage.getItem('activities')) || [];
        $scope.activities = activities;
        for (var i = 0; i < activities.length; i++) {
            $scope.activity = activities[i];
        }

        //创建活动
        $scope.createActivity = function () {
            $location.path('/activity_create');
        }
        //活动为空直接跳转创建活动
        if (activities.length == 0) {

            $location.path('/activity_create');

        }
        //点击单个活动事件
        $scope.activity_register = function (name) {
            //活动名传值
            var InnerAct = JSON.parse(localStorage.getItem("InnerAct"));
            var activities = JSON.parse(localStorage.getItem("activities"));
            for (var i = 0; i < activities.length; i++) {
                if (name == activities[i].name && activities[i].status == "status") {
                    InnerAct.name=activities[i].name;
                    InnerAct.act="true";
                    localStorage.setItem("InnerAct", JSON.stringify(InnerAct));
                    $location.path('/activity_register');
                }
                if (name != activities[i].name) {
                    InnerAct.name = name;
                    InnerAct.act = "false";
                    localStorage.setItem("InnerAct", JSON.stringify(InnerAct));
                    $location.path('/activity_register');

                }

            }

        }


    });