'use strict';
/**
 * Created by lishaodan on 14-7-21.
 */
angular.module('yoDemoApp')
    .controller('bid_registerCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var activities = JSON.parse(localStorage.getItem("activities")) || [];
        var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
        if (InnerAct.bid_act == "false") {

            $scope.startbid = false;
        } else if (InnerAct.bid_act == "true") {
            $scope.startbid = true;
        }

        for (var i = 0; i < activities.length; i++) {
            if (InnerAct.name == activities[i].name) {
                var bidNo = activities[i].bidlists.length;
                $scope.bid_name = InnerAct.bid_name;
                for (var j = 0; j < bidNo; j++) {
                    if (InnerAct.bid_name == activities[i].bidlists[j].bid_name) {
                        $scope.bidMessages = activities[i].bidlists[j].bidMessages;
                        $scope.bidMessageNO = activities[i].bidlists[j].bidMessages.length;
                    }
                }
            }
        }

        $scope.return = function () {
            $location.path('/bid_list');
        }
        $scope.stop = function () {

                event.returnValue = confirm("确认要结束本轮竞价吗？");
                if (event.returnValue) {

                    var activities = JSON.parse(localStorage.getItem("activities")) || [];
                    var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];

                    for (var i = 0; i < activities.length; i++) {
                        if (InnerAct.name == activities[i].name) {
                            var bidlists = activities[i].bidlists;
                            for (var j = 0; j < bidlists.length; j++) {
                                if (activities[i].bidlists[j].bid_name == $scope.bid_name && $scope.bid_name == InnerAct.bid_name) {
                                    activities[i].bidlists[j].status = "";
                                    InnerAct.bid_act = "false";

                                    localStorage.setItem("activities", JSON.stringify(activities));
                                    localStorage.setItem("InnerAct", JSON.stringify(InnerAct));


                                    $scope.startbid = false;
                                }
                            }
                        }
                    }


                }
                else {
                    $scope.startbid = true;
                }

            }

        //   refresh方法刷新页面
        $scope.refresh = function () {
            var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
            var activities = JSON.parse(localStorage.getItem('activities')) || [];
            for (var i = 0; i < activities.length; i++) {
                if (InnerAct.name == activities[i].name) {
                    var bidNo = activities[i].bidlists.length;
//                    $scope.bid_name = "竞价" + bidNo;

                    for (var j = 0; j < bidNo; j++) {
                        if (InnerAct.bid_name == activities[i].bidlists[j].bid_name) {
                            $scope.bidMessages = activities[i].bidlists[j].bidMessages;
                            $scope.bidMessageNO = activities[i].bidlists[j].bidMessages.length;
                        }
                    }
                }
            }
        }


    });