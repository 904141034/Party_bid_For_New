function render_bids(current_activity){
    var bids = JSON.parse(localStorage.bids);
    var bidd=_.filter(bids,function(bid){ return  bid.activity_id==current_activity; });
    return bidd;
}
function render_biddings(current_activity,bid_name){
    var sign_ups=JSON.parse(localStorage.sign_ups);
    var bids=render_bids(current_activity);
    var bidd=_.filter(bids,function(bid){ return  bid.name==bid_name;});
    var count_price_group = _.countBy(bidd[0].biddings, function (bidding) {return bidding.price;});
    var bid_price_group = _.map(count_price_group, function (value, key) { return {"price": key, "count": value}});
    var bid_success_price= _.findWhere(bid_price_group,{count:1});
    var phone= _.findWhere(bidd[0].biddings,{price:bid_success_price.price}).phone;
    var name= _.findWhere(sign_ups,{phone:phone,activity_id:current_activity}).name;
    return success(bid_success_price.price,phone,name);
}
function success(price,phone,name){
    var bidsuccess={};
    var bidSu=[];
    bidsuccess.name=name;
    bidsuccess.price=price;
    bidsuccess.phone=phone;
    bidSu.unshift(bidsuccess);
    return bidSu;
}
function render_sign_ups(current_activity){
    var sign_ups=JSON.parse(localStorage.sign_ups);
    var sign_up_list=_.filter(sign_ups,function(sign_up){ return sign_up.activity_id==current_activity;});
    return sign_up_list;
}