'use strict';
/**
 * Created by lishaodan on 14-7-22.
 */
angular.module('yoDemoApp')
    .controller('bid_listCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.start = function () {
            var bid_name="竞价" +(Activity.bidLength()+1) ;
            var bidlist = new BidList(bid_name,"status",[]);
            bidlist.add_saveItem();
            $location.path('/bid_register');
        };
        $scope.return = function () {
            $location.path('/activity_list');
        };
        InnerAct.Create_bidOrNot($scope);
        $scope.bidlists=BidList.get_listBid();
        $scope.bid_register=function(bid_name){
            BidList.clickCertainbid(bid_name);
            $location.path('/bid_register');
        };
    });