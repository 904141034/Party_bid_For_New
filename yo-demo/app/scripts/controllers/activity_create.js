/**
 * Created by lishaodan on 14-7-9.
 */
angular.module('yoDemoApp')
    .controller('activity_createCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //定义activities数组并获取
        var activity = {};
        var activities = JSON.parse(localStorage.getItem('activities')) || [];
        var InnerAct={};

        //返回按钮
        $scope.show="false";
        if(activities.length!=0){
            $scope.show="true";

        }else{
            $scope.show="false";
        }
        $scope.return=function(){
            $location.path('/activity_list');
        }


        $scope.IsUseStr=function(){

        }

        //创建活动
        $scope.create_Activity=function(){
            //重复警告

            $scope.textAlert = "false";
                ///判断活动重名
             for(var i=0;i<activities.length;i++){
                if($scope.activity_name==activities[i].name){
                        $scope.textAlert="true";

                    break;
                    }

                }
           if($scope.textAlert=="false"){

            activity.name=$scope.activity_name;
            activity.bmMessages=[];
            activity.status="";
            activities.unshift(activity);
            localStorage.setItem("activities", JSON.stringify(activities));

            InnerAct.name=$scope.activity_name;
            InnerAct.act=false;
               localStorage.setItem("InnerAct",JSON.stringify(InnerAct));


            $location.path('/activity_register');

           }

        };

    });