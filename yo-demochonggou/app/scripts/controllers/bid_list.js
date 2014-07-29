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
        var activities = JSON.parse(localStorage.getItem("activities")) || [];
        var innerAct = JSON.parse(localStorage.getItem("innerAct")) || [];
        InnerAct.Create_bidOrNot($scope);
        
        for (var i = 0; i < activities.length; i++) {
            if (innerAct.name == activities[i].name) {
                $scope.bidlists=activities[i].bidlists;

            }
        }
        $scope.bid_register=function(bid_name){

            var activities = JSON.parse(localStorage.getItem("activities")) || [];
            var innerAct = JSON.parse(localStorage.getItem("innerAct")) || [];
            for (var i = 0; i < activities.length; i++) {
                if (innerAct.name == activities[i].name) {
                    var bidlists=activities[i].bidlists;
                    for(var j=0;j<bidlists.length;j++){
                        if(bid_name==bidlists[j].bid_name){
                            innerAct.bid_name=bid_name;

                            if(bidlists[j].status=="status"){
                                innerAct.bid_act="true";
                            }else if(bidlists[j].status==""){
                                innerAct.bid_act="false";
                            }

                        }
                    }
                    localStorage.setItem("innerAct", JSON.stringify(innerAct));
                }

                }
            $location.path('/bid_register');
        }


    });