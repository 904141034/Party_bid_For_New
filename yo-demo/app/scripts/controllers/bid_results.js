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

    });