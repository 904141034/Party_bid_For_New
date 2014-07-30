function Bid(bidname){
    this.name=bidname;
    this.biddings=[];
}
Bid.prototype.create=function(){

};
create_new_bid=function(activity_name){
    var activities=Activity.getActivities();
    var bids=_.findWhere(activities,{name:activity_name}).bids;
    var bids_length=bids.length+1;
    var bidname="竞价"+bids_length.toString();
    var bid= new Bid (bidname);
    bids.push(bid);
    Activity.setActivities(activities);


};