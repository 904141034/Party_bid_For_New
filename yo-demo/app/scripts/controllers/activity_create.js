'use strict';
/**
 * Created by lishaodan on 14-7-9.
 */
angular.module('yoDemoApp')
    .controller('activity_createCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //定义activities数组并获取
        var activity = {};
        var activities = JSON.parse(localStorage.getItem('activities')) || [];
        var InnerAct = {};
//        var bidlist={};
//        var bidmessage = {};
//        var bidmessages = [];
//        var bidlists = [];


        //返回按钮
        $scope.show = "false";
        if (activities.length != 0) {
            $scope.show = "true";

        } else {
            $scope.show = "false";
        }
        $scope.return = function () {
            $location.path('/activity_list');
        }


        $scope.IsUseStr = function () {

        }

        //创建活动
        $scope.create_Activity = function () {
            //重复警告

            $scope.textAlert = "false";
            ///判断活动重名
            for (var i = 0; i < activities.length; i++) {
                if ($scope.activity_name == activities[i].name) {
                    $scope.textAlert = "true";

                    break;
                }

            }
            if ($scope.textAlert == "false") {

                activity.name = $scope.activity_name;
                activity.bmMessages = [];
                activity.status = "";

//                bidmessage.person_name = "";
//                bidmessage.phone_number = "";
//                bidmessage.price = "";
//                bidmessages.unshift(bidmessage);
//                bidlist.bidmessages = bidmessages;
//                bidlist.bid_name = "";
//                bidlists.unshift(bidlist);
                activity.bidlists =[];

                activities.unshift(activity);
                localStorage.setItem("activities", JSON.stringify(activities));



                InnerAct.name = $scope.activity_name;
                InnerAct.act = "false";
                InnerAct.bid_name="";
                InnerAct.bid_act="";
                localStorage.setItem("InnerAct", JSON.stringify(InnerAct));


                $location.path('/activity_register');

            }

        };

    });