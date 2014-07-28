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
Activity.getActivities=function()
{
    var activities=JSON.parse(localStorage.getItem("activities"))||[];
    return activities;
};
Activity.setActivities=function(activities)
{
     localStorage.setItem('activities',JSON.stringify(activities)) ;
};
Activity.isRename=function(activity_name){

   var activities= Activity.judgeActivityName(activity_name);
   var result=!(activities.length==0);
   return String(result);

};
Activity.judgeActivityName=function(activity_name)
{
    var activities=Activity.getActivities();
    if(activities.length!=0){
        var activity=_.find(activities,function(activity){
            return activity.name==activity_name;
        });
        return activity;
    }

    return activities;

};
Activity.getLength=function(){
    var activities=Activity.getActivities();
    var result=(activities.length!=0);
    return String(result);
};



