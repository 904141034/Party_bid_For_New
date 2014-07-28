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
        var bid_pricegroup = JSON.parse(localStorage.getItem("bid_pricegroup"));
        var innerAct = JSON.parse(localStorage.getItem("innerAct"));
        var bid_success = JSON.parse(localStorage.getItem("bid_success"));
        var No = 0;
        for (var i = 0; i < bid_pricegroup.length; i++) {
            No += bid_pricegroup[i].count;
        }
        $scope.bidMessageNO = No;
        $scope.bid_name = innerAct.bid_name;
        $scope.bid_pricegroup = bid_pricegroup;
        if (bid_success.person_name != "") {
            $scope.bid_success = bid_success.person_name + " " + "￥" + bid_success.bid_price + "  " + bid_success.phone_number;

        }else if(bid_success.person_name == ""){
            $scope.bid_success="竞价失败！"
        }
        $scope.return=function(){
            $location.path('/bid_list');
        }

    });