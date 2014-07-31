function Bid(price,phone){
    this.price=price;
    this.phone=phone;
}
function  create_new_bid(current_activity_id){
    var activities =Activity.getActivities();
    var activity_name=activities[current_activity_id].name;
    var bids= _.findWhere(activities,{name:activity_name}).bids;
    var biddings= _.findWhere(activities,{name:activity_name}).biddings;
    var bid_name="竞价"+(bids.length+1).toString();
    bids[bids.length]=bid_name;
    biddings[bid_name]=[];
    Activity.setActivities(activities);
}