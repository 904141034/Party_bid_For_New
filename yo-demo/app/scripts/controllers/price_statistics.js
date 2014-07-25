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
        var bid_pricegroup=JSON.parse(localStorage.getItem("bid_pricegroup"));
        var InnerAct=JSON.parse(localStorage.getItem("InnerAct"));
        var bid_success=JSON.parse(localStorage.getItem("bid_success"));
        var No=0;
        for(var i=0;i<bid_pricegroup.length;i++){
            No+=bid_pricegroup[i].count;
        }
        $scope.bidMessageNO=No;
        $scope.bid_name=InnerAct.bid_name;
        $scope.bid_pricegroup=bid_pricegroup;

        $scope.bid_successperson=bid_success.person_name;
        $scope.bid_successprice=bid_success.bid_price;
        $scope.bid_successphoneNumber=bid_success.phone_number;
    });