/**
 * Created by lishaodan on 14-7-28.
 */
function Activity(activity_name){
    this.name = activity_name;
    this.status="";
    this.bmMessages=[];
    this.bidlists=[];
}
Activity.prototype.add_saveItem=function()
{
    var activities=Activity.getActivities();
    activities.unshift(this);
    Activity.setActivities(activities);
}
Activity.getActivities=function(){
    return JSON.parse(localStorage.getItem("activities"))||[];
};
Activity.setActivities=function(activities){
     localStorage.setItem('activities',JSON.stringify(activities)) ;
};
Activity.isRename=function(activity_name){

   var activities= Activity.judgeActivityName(activity_name);
   var result=!(activities==[]||typeof(activities)=="undefined");
   return String(result);

};
Activity.judgeActivityName=function(activity_name){
    var activities=Activity.getActivities();
    if(activities.length!=0){
        var activity=_.find(activities,function(activity){
            return activity.name==activity_name;
        });
        return activity;
    }
    return activities.toString();
};
Activity.getLength=function(){
    var activities=Activity.getActivities();
    return String((activities.length!=0));
};
Activity.list_activities=function($scope){
    var activities=Activity.getActivities();
    var innerAct=JSON.parse(localStorage.getItem("innerAct"));
    if(innerAct.bid_act=="true"||innerAct.act=="true"){
        _.findWhere(activities,{name:innerAct.name}).status="status";
    }
    $scope.activities=activities;
};
Activity.activity_register=function(name){
    var activities=Activity.getActivities();
    var innerAct=JSON.parse(localStorage.getItem("innerAct"));
    innerAct.name=name;
    var activity= _.find(activities,function(activity){
        return activity.name==name && activity.status=="status";
    });
    typeof(activity)=="undefined"? innerAct.act="false":innerAct.act="true";
};
Activity.Start_StopButton=function($scope,$location){
   $scope.start_stop =="开始" ? Activity.start($scope):Activity.stop($scope,$location);
};
Activity.start=function($scope){
    $scope.start_stop ="结束";
    var activities=Activity.getActivities();
    var innerAct=JSON.parse(localStorage.getItem("innerAct"));
    _.findWhere(activities,{name:innerAct.name}).status = "status";
    innerAct.act = "true";
    Activity.setActivities(activities);
    InnerAct.setInnerAct(innerAct);
};
Activity.stop=function($scope,$location){
    event.returnValue = confirm("确认要结束本次报名吗？");
    if (event.returnValue) {
        $scope.start_stop = "开始";
        var activities = Activity.getActivities();
        var innerAct = JSON.parse(localStorage.getItem("innerAct"));
        innerAct.act = "false";
        _.findWhere(activities, {name: innerAct.name}).status = "";
        Activity.setActivities(activities);
        InnerAct.setInnerAct(innerAct);
        $location.path('/bid_list');
    }
};




