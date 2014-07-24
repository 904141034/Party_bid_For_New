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
            var activities = JSON.parse(localStorage.getItem("activities")) || [];
            var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];

            for (var i = 0; i < activities.length; i++) {
                if (InnerAct.name == activities[i].name) {
                    var bidlist = {};
                    var bidlists=activities[i].bidlists;
                    var bidno = activities[i].bidlists.length+1;
                    bidlist.bid_name = "竞价" + bidno;
                    bidlist.status="status";
                    bidlist.bidMessages = [];
                    bidlists.unshift(bidlist);
                    activities[i].bidlists=bidlists;
                    localStorage.setItem("activities", JSON.stringify(activities));

                    InnerAct.bid_name="竞价" + bidno;
                    InnerAct.bid_act="true";
                    localStorage.setItem("InnerAct", JSON.stringify(InnerAct));

                }
            }


            $location.path('/bid_register');

        };
        //返回按钮
        $scope.return = function () {
            $location.path('/activity_list');

        }
        var activities = JSON.parse(localStorage.getItem("activities")) || [];
        var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
        if(InnerAct.act=="true"){
            $scope.create_bid=false;
        }else if(InnerAct.act=="false"|| InnerAct.act==""){
            var m=0;
            for (var i = 0; i < activities.length; i++) {
                if (InnerAct.name == activities[i].name) {
                    var bidlists=activities[i].bidlists;
                    for(var j=0;j<bidlists.length;j++){
                        if(bidlists[j].status!="status"){
                            m++
                        }
                    }
                    if(m==bidlists.length){
                        $scope.create_bid=true;
                    }else if(m!=bidlists.length){
                        $scope.create_bid=false;
                    }
                }
            }

        }

        for (var i = 0; i < activities.length; i++) {
            if (InnerAct.name == activities[i].name) {
                $scope.bidlists=activities[i].bidlists;

            }
        }
        $scope.bid_register=function(bid_name){

            var activities = JSON.parse(localStorage.getItem("activities")) || [];
            var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
            for (var i = 0; i < activities.length; i++) {
                if (InnerAct.name == activities[i].name) {
                    var bidlists=activities[i].bidlists;
                    for(var j=0;j<bidlists.length;j++){
                        if(bid_name==bidlists[j].bid_name){
                            InnerAct.bid_name=bid_name;

                            if(bidlists[j].status=="status"){
                                InnerAct.bid_act="true";
                            }else if(bidlists[j].status==""){
                                InnerAct.bid_act="false";
                            }

                        }
                    }
                    localStorage.setItem("InnerAct", JSON.stringify(InnerAct));
                }

                }
            $location.path('/bid_register');
        }


    });