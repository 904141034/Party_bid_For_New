function Activity(activity_name){
    this.name=activity_name;
    this.sign_ups=[];
    this.bids=[];
    this.biddings={};

}
Activity.prototype.create=function(){
    var activities =Activity.getActivities();
    var activity_ids = Activity.getActivityids();
    var activity_id=activity_ids.length.toString();
    this.id=activity_id;
    activities[activity_id]=this;
    activity_ids.push(activity_id);
    Activity.setActivities(activities);
    Activity.setActivityids(activity_ids);
    localStorage.current_activity= activity_id;
};
Activity.getActivities=function(){
    return JSON.parse(localStorage.getItem("activities"))||[];
};
Activity.setActivities=function(activities){
    localStorage.setItem('activities',JSON.stringify(activities)) ;
};
Activity.getActivityids=function() {
    return JSON.parse(localStorage.getItem("activity_ids"))||[];
};
Activity.setActivityids=function(activity_ids) {
    localStorage.setItem('activity_ids',JSON.stringify(activity_ids)) ;
};
