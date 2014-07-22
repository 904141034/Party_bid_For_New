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
        $scope.start=function(){
            var activities = JSON.parse(localStorage.getItem("activities")) || [];
            var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
            for(var i=0;i<activities.length;i++){
                if(InnerAct.name==activities[i].name){
                    var bidno=activities[i].bidlists.length;
                    var bid_name="竞价"+(bidno+1);
                    activities[i].bidlists.bid_name=bid_name;
                    localStorage.setItem("activities", JSON.stringify(activities));
                    console.log(activities);
                }
            }

        };
        //返回按钮
        $scope.return1= function () {
            $location.path('/activity_list');

        }
    });