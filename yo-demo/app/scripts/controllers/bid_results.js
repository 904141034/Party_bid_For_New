'use strict'
/**
 * Created by lishaodan on 14-7-24.
 */
angular.module('yoDemoApp')
    .controller('bid_resultsCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return=function(){
            $location.path('/bid_list');
        }
        var InnerAct =JSON.parse(localStorage.getItem("InnerAct")) ||[];
        var activities = JSON.parse(localStorage.getItem("activities")) || [];
        $scope.bid_name=InnerAct.bid_name;
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
                        $scope.bidMessageNO=sot_bybidprice.length;
                        $scope.bidMessages=sot_bybidprice;
                        console.log(sot_bybidprice);
                        console.log( $scope.bidMessages);
                    }
                }
            }
        }

    });