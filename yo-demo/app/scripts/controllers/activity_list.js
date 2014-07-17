/**
 * Created by lishaodan on 14-7-9.
 */
angular.module('yoDemoApp')
    .controller('activity_listCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ]

        var activities = JSON.parse(localStorage.getItem('activities')) || [];
        $scope.activities = activities;
        for (var i = 0; i < activities.length; i++) {
            $scope.activity = activities[i];
        }


        $scope.createActivity = function () {
            $location.path('/activity_create');
        }

        if (activities.length == 0) {

            $location.path('/activity_create');

        }
        $scope.activity_register = function (name) {
            var InnerAct = JSON.parse(localStorage.getItem("InnerAct"));
            var activities = JSON.parse(localStorage.getItem("activities"));
            for (var i = 0; i < activities.length; i++) {
                if (name == activities[i].name && activities[i].status=="status"){

                    $location.path('/activity_register');
                    }
                if(activities[i].status=="status" && name!=activities[i].name){

                        InnerAct.name=name;
                        InnerAct.act=false;
                        localStorage.setItem("InnerAct",JSON.stringify(InnerAct));
                        $location.path('/activity_register');

                    }


                }

            }


    });