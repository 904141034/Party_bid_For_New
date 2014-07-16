/**
 * Created by lishaodan on 14-7-11.
 */
angular.module('yoDemoApp')
    .controller('activity_registerCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return=function(){
            var InnerAct=JSON.parse(localStorage.getItem("InnerAct"))||[];
            if(InnerAct.act==false){
                InnerAct.name=null;
                InnerAct.act=null;
                localStorage.setItem("InnerAct",JSON.stringify(InnerAct));
                $location.path('/activity_list');
            }else if(InnerAct.act==true){
                $location.path('/activity_list');

            }

        };
        $scope.start_stop="开始";
        $scope.registerNum=0;


        $scope.start=function(){

            if($scope.start_stop=="开始"){
                var InnerAct=JSON.parse(localStorage.getItem("InnerAct"))||[];
                if(InnerAct.act==false){
                    InnerAct.act=true;
                    localStorage.setItem("InnerAct",JSON.stringify(InnerAct));
                    $scope.start_stop="结束";
                }



            }
            else if($scope.start_stop=="结束"){
             event.returnValue=confirm("确认要结束本次报名吗？");
                if(event.returnValue){
                    var InnerAct=JSON.parse(localStorage.getItem("InnerAct"))||[];
                    if(InnerAct.act=true){
                        InnerAct.act=false;
                        localStorage.setItem("InnerAct",JSON.stringify(InnerAct));
                        $scope.start_stop="开始";
                    }
                }

            }

        };



    });