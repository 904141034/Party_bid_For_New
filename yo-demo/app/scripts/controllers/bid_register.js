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
        if(InnerAct.bid_act=="true"){
            $scope.stop_button='结束';
        }else if(InnerAct.bid_act=="false"){
            $scope.stop_button='开始';
        }
        for (var i = 0; i < activities.length; i++) {
            if (InnerAct.name == activities[i].name) {
                var bidNo = activities[i].bidlists.length;
                $scope.bid_name = "竞价" + bidNo;
               for(var j=0;j<bidNo;j++){
                   if(InnerAct.bid_name==activities[i].bidlists[j].bid_name){
                       $scope.bidMessages=activities[i].bidlists[j].bidMessages;
                       $scope.bidMessageNO=activities[i].bidlists[j].bidMessages.length;
                   }
               }
            }
        }

        $scope.return = function () {
            $location.path('/bid_list');
        }
        $scope.stop = function () {
            if ( $scope.stop_button=='结束') {


                event.returnValue = confirm("确认要结束本轮竞价吗？");
                if (event.returnValue) {

                    for (var i = 0; i < activities.length; i++) {
                        if (InnerAct.name == activities[i].name) {
                            var bidlists = activities[i].bidlists;
                            for (var j = 0; j < bidlists.length; j++) {
                                if (activities[i].bidlists[j].bid_name == $scope.bid_name && $scope.bid_name == InnerAct.bid_name) {
                                    activities[i].bidlists[j].status = "";
                                    InnerAct.bid_act = "false";
                                    localStorage.setItem("activities", JSON.stringify(activities));
                                    localStorage.setItem("InnerAct", JSON.stringify(InnerAct));
                                }
                            }
                        }
                    }
                    $scope.stop_button = '开始';
                }

            }
            else if($scope.stop_button == '开始'){

                for (var i = 0; i < activities.length; i++) {
                    if (InnerAct.name == activities[i].name) {
                        var bidlists = activities[i].bidlists;
                        for (var j = 0; j < bidlists.length; j++) {
                            if (activities[i].bidlists[j].bid_name == $scope.bid_name && $scope.bid_name == InnerAct.bid_name) {
                                activities[i].bidlists[j].status = "status";
                                InnerAct.bid_act = "true";
                                localStorage.setItem("activities", JSON.stringify(activities));
                                localStorage.setItem("InnerAct", JSON.stringify(InnerAct));
                            }
                        }
                    }
                }
                $scope.stop_button='结束'
            }
        }

    });