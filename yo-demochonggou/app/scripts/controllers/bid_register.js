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
            var bidMessages=BidList.refresh();
            $scope.bidMessages = bidMessages;
            $scope.bidMessageNO=bidMessages.length;
        }
    });