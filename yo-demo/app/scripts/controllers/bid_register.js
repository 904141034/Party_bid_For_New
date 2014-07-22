'use strict';
/**
 * Created by lishaodan on 14-7-21.
 */
angular.module('yoDemoApp')
    .controller('bid_registerCtrl', function ($scope) {
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
                console.log(activities[i]);
            }
        }
    });