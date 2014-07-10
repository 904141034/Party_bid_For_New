/**
 * Created by lishaodan on 14-7-9.
 */
angular.module('yoDemoApp')
    .controller('activity_listCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ]

        var activities = JSON.parse(localStorage.getItem('activities')) || [];
        $scope.activities=activities;
        for(var i=0;i<activities.length;i++){
            $scope.activity=activities[i];
        }

       // console.log($scope.activity.name);



    });