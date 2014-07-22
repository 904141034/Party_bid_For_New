'use strict';
/**
 * Created by lishaodan on 14-7-21.
 */
angular.module('yoDemoApp')
    .controller('bid_registerCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        var activities = JSON.parse(localStorage.getItem("activities")) || [];
        var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
        for(var i=0;i<activities.length;i++) {
            if (InnerAct.name == activities[i].name) {
               var bidNo=activities[i].bidlists.length;
                $scope.bid_name="竞价"+bidNo;

            }
        }

        $scope.return=function(){
            $location.path('/bid_list');
        }
        $scope.stop=function(){
            for(var i=0;i<activities.length;i++) {
                if (InnerAct.name == activities[i].name ) {
                    var bidlists=activities[i].bidlists;
                    for(var j=0;j<bidlists.length;j++){
                        if(activities[i].bidlists[j].bid_name==$scope.bid_name){
                            activities[i].bidlists[j].status="";
                            localStorage.setItem("activities", JSON.stringify(activities));

                        }

                    }


                }
            }
        }

    });