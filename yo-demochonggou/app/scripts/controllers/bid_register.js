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
        InnerAct.bidregisterOrNot($scope);
        $scope.bid_name =InnerAct.getInnerAct().bid_name;
        $scope.bidMessages=BidList.getCertainBid().bidMessages;
        $scope.bidMessageNO=BidList.getCertainBid().bidMessages.length;
        $scope.return = function () {
            $location.path('/bid_list');
        }
        $scope.stop = function () {
                event.returnValue = confirm("确认要结束本轮竞价吗？");
                event.returnValue?BidList.stopBiddingAllFunctions($scope,$location): $scope.startbid = true;
            };
        //   refresh方法刷新页面
        $scope.refresh = function () {
            var innerAct = JSON.parse(localStorage.getItem("innerAct")) || [];
            var activities = JSON.parse(localStorage.getItem('activities')) || [];
            for (var i = 0; i < activities.length; i++) {
                if (innerAct.name == activities[i].name) {
                    var bidNo = activities[i].bidlists.length;

                    for (var j = 0; j < bidNo; j++) {
                        if (innerAct.bid_name == activities[i].bidlists[j].bid_name) {
                            $scope.bidMessages = activities[i].bidlists[j].bidMessages;
                            $scope.bidMessageNO = activities[i].bidlists[j].bidMessages.length;
                        }
                    }
                }
            }
        }


    });