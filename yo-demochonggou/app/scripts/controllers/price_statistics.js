'use strict'
/**
 * Created by lishaodan on 14-7-24.
 */
angular.module('yoDemoApp')
    .controller('price_statisticsCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.bidMessageNO = BidList.getSortByPricelength();
        $scope.bid_name =InnerAct.getInnerAct().bid_name;
        $scope.bid_pricegroup = BidList.getBidPriceGroup();
        BidList.judeBidSuccess($scope);
        $scope.return=function(){
            $location.path('/bid_list');
        }
    });