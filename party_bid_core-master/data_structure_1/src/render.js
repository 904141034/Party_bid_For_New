function transform_bids_to_view_model(activity_name){
    var activities=Activity.getActivities();
    var bids=_.findWhere(activities,{name:activity_name}).bids;
    return bids;
}
function transform_biddings_to_view_model(activity_name,bid_name){
    var bids=transform_bids_to_view_model(activity_name);
    var biddings=_.findWhere(bids,{name:bid_name}).biddings;
    var max_price = _.max(biddings, function (biddings) {
        return biddings.price;
    });
    var max_Price=[max_price];
    max_Price.push();
    return max_Price;
}
function render_sign_ups(activity_name){
    var activities=Activity.getActivities();
    var sign_ups=_.findWhere(activities,{name:activity_name}).sign_ups;
    return sign_ups;
}