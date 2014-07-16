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
        $scope.activities=activities;
        for(var i=0;i<activities.length;i++){
            $scope.activity=activities[i];
        }


        $scope.createActivity=function(){
            $location.path('/activity_create');
        }

        if(activities.length==0) {

            $location.path('/activity_create');

        }

        var InnerAct = JSON.parse(localStorage.getItem("InnerAct"));

        for(var i=0;i<activities.length;i++ ){
            if(InnerAct.name==activities[i].name){

                activities[i].status="status";
                $scope.activities=activities;

                $scope.activity=activities[i];
               // localStorage.setItem("activities",JSON.stringify(activities));


            }
        }






    });