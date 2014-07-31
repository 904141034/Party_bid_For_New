function Activity(activity_name){
    this.name=activity_name;
    this.sign_ups=[];
    this.bids=[];
}
Activity.prototype.create=function(){
    var activities=Activity.getActivities();
    activities.unshift(this);
    Activity.setActivities(activities);

};
Activity.getActivities=function(){
    return JSON.parse(localStorage.getItem("activities"))||[];
};
Activity.setActivities=function(activities){
    localStorage.setItem('activities',JSON.stringify(activities)) ;
};
Activity.prototype.active=function(){
    localStorage.current_activity=this.name;
};