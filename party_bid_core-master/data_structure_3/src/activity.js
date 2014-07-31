function Activity(activity_name){
    this.id="";
    this.name=activity_name;
}
Activity.prototype.create=function(){
    var activities=Activity.getActivities();
    var ll=activities.length.toString();
    this.id=ll;
    activities.push(this);
    Activity.setActivities(activities);
    localStorage.current_activity=ll;
    localStorage.activity_id_generator=(activities.length).toString();

};
Activity.getActivities=function(){
    return JSON.parse(localStorage.getItem("activities"))||[];
};
Activity.setActivities=function(activities){
    localStorage.setItem('activities',JSON.stringify(activities)) ;
};