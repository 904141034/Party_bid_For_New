function transform_bids_to_view_model(current_activity){
    var activities=Activity.getActivities();
    var activity=activities[current_activity];
    return activity.bids;
}
function transform_biddings_to_view_model(current_activity,bid){
    var activities=Activity.getActivities();
    var activity=activities[current_activity];
    var bidding=activity.biddings[bid];
    var count_price_group = _.countBy(bidding, function (bidding) {
        return bidding.price;
    });
    var bid_price_group = _.map(count_price_group, function (value, key) {
        return {"price": key, "count": value}
    });
    var bid_success= _.findWhere(bid_price_group,{count:1});

    var phone=_.findWhere(bidding,{price:bid_success.price}).phone;
    var name= _.findWhere(activity.sign_ups,{phone:phone}).name;
    console.log(bid_success.price);
    var bidsuccess={};
    var bidSu=[];
    bidsuccess.name=name;
    bidsuccess.price=bid_success.price;
    bidsuccess.phone=phone;
    bidSu.unshift(bidsuccess);
    return bidSu;
}
function render_sign_ups(activity_name){
    var activities=Activity.getActivities();
    var activity=_.findWhere(activities,{name:activity_name});
    return activity.sign_ups;
}