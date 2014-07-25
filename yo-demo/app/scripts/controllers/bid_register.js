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
                    for(var i=0;i<activities.length;i++){
                        if(InnerAct.name==activities[i].name){
                            var bidlists=activities[i].bidlists;
                            for(var j=0;j<bidlists.length;j++){
                                if(InnerAct.bid_name==bidlists[j].bid_name){
                                    var bidMessages=bidlists[j].bidMessages;
                                    //使用underscore 按升序排列赋给sot_bybidprice
                                    var sot_bybidprice = _.sortBy(bidMessages, function (bidMessages) {
                                        return bidMessages.bid_price;
                                    });
                                    var sot_bybidPrice = JSON.parse(localStorage.getItem("sot_bybidPrice")) || [];
                                    sot_bybidPrice=sot_bybidprice;
                                    localStorage.setItem("sot_bybidPrice", JSON.stringify(sot_bybidPrice));
//                                    $scope.bidMessageNO=sot_bybidprice.length;
//                                    $scope.bidMessages=sot_bybidprice;

                                    var count_pricegroup = _.countBy(bidMessages, function (bidMessages) {
                                        return bidMessages.bid_price;

                                    })
                                    var pricegroup = _.map(count_pricegroup, function (value, key) {
                                        return {"price": key, "count": value}
                                    })
                                    var bid_pricegroup=pricegroup;
                                    localStorage.setItem('bid_pricegroup',JSON.stringify(bid_pricegroup));
                                    var l=0;
                                    for(var m=0;m<bid_pricegroup.length;m++){
                                        if(bid_pricegroup[m].count==1){
                                            var bid_success = _.find(sot_bybidprice, function(bid_success){
                                                return bid_success.bid_price == bid_pricegroup[m].price; });
                                            localStorage.setItem('bid_success',JSON.stringify(bid_success));
                                        }else{
                                            l++;

                                        }
                                    }
                                    if(l==bid_pricegroup.length){
                                        var bid_success = JSON.parse(localStorage.getItem("bid_success")) || [];
                                        bid_success.person_name="";
                                        bid_success.bid_price="";
                                        bid_success.phone_number="";
                                        localStorage.setItem('bid_success',JSON.stringify(bid_success));
                                    }

                                }
                            }
                        }
                    }

                    $location.path('/bid_results');
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