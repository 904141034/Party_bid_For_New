'use strict'
/**
 * Created by lishaodan on 14-7-24.
 */
angular.module('yoDemoApp')

    .controller('bid_resultsCtrl', function ($scope, $location, $timeout) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $('#bid_resultsModal').modal("show");
        $scope.showsuccess = "false";
        var bid_success = JSON.parse(localStorage.getItem("bid_success")) || {};

        var bid_successphone = bid_success.phone_number.substr(0, 3);

        if (bid_success.person_name != "") {
            $scope.bid_success = bid_success.person_name + " " + "￥" + bid_success.bid_price + "  " + bid_success.phone_number;
            $scope.bid_successMessage = bid_success.person_name + " " + "￥" +
                bid_success.bid_price + "  " + bid_successphone + "XXXXXXXX" + " " + "竞价成功！"
        } else if (bid_success.person_name == "") {
            $scope.bid_success = "竞价失败！";
            $scope.bid_successMessage = "竞价失败！";
        }
        $timeout(function () {
            $('#bid_resultsModal').modal('hide');
            $scope.showsuccess = "true";
        }, 3000);

        $scope.return = function () {
            $location.path('/bid_list');
        }
        var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
        var activities = JSON.parse(localStorage.getItem("activities")) || [];
        var sot_bybidPrice = JSON.parse(localStorage.getItem("sot_bybidPrice")) || [];
        $scope.bid_name = InnerAct.bid_name;
        $scope.bidMessageNO = sot_bybidPrice.length;
        $scope.bidMessages = sot_bybidPrice;
        console.log(sot_bybidPrice);


    });