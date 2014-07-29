/**
 * Created by lishaodan on 14-7-29.
 */
function BidList(bid_name,status,bidMessages){
    this.bid_name = bid_name;
    this.status=status;
    this.bidMessages=bidMessages;
}
BidList.prototype.add_saveItem=function(){
    var activities=Activity.getActivities();
    var innerAct=JSON.parse(localStorage.getItem("innerAct"))||{};
    _.findWhere(activities,{name:innerAct.name}).bidlists.unshift(this);
    Activity.setActivities(activities);
    innerAct.bid_name=this.bid_name;
    innerAct.bid_act="true";
    InnerAct.setInnerAct(innerAct);
};
BidList.get_listBid=function(){
    var activities=Activity.getActivities();
    var innerAct=InnerAct.getInnerAct();
    var bidlists= _.findWhere(activities,{name:innerAct.name}).bidlists;
    return bidlists;
};
BidList.clickCertainbid=function(bid_name){
    var innerAct=InnerAct.getInnerAct();
    innerAct.bid_name=bid_name;
    var bidlists=BidList.get_listBid();
    var bidlist=_.findWhere(bidlists,{bid_name:bid_name});
    bidlist.status=="status"?innerAct.bid_act="true":innerAct.bid_act="false";
    InnerAct.setInnerAct(innerAct);
};
BidList.getCertainBid=function(){
    var bidlists=BidList.get_listBid();
    var innerAct=InnerAct.getInnerAct();
    var certainbid=_.findWhere(bidlists,{bid_name:innerAct.bid_name});
    return certainbid;
};
BidList.stopBiddingAllFunctions=function($scope,$location){
    BidList.stopBidding($scope);
    BidList.stopBidding_SortAndCountActions();
    $location.path('/bid_results');
};
BidList.stopBidding=function($scope){
    var activities=Activity.getActivities();
    var innerAct=InnerAct.getInnerAct();
    var activitylists= _.findWhere(activities,{name:innerAct.name}).bidlists;
    _.findWhere(activitylists,{bid_name:innerAct.bid_name}).status="";
    innerAct.bid_act = "false";
    Activity.setActivities(activities);
    InnerAct.setInnerAct(innerAct);
    $scope.startbid = false;
};
BidList.stopBidding_SortAndCountActions=function(){
    var bidlists=BidList.get_listBid();
    var innerAct=InnerAct.getInnerAct();
    var bidMessages=_.findWhere(bidlists,{bid_name:innerAct.bid_name}).bidMessages;
    BidList.sort_Bybidprice(bidMessages);
    BidList.bid_pricegroup(bidMessages);
};
BidList.sort_Bybidprice=function(bidMessages){
    var sort_bybidprice = _.sortBy(bidMessages,function(bidMessages){
        return (bidMessages.bid_price);
    });
    localStorage.setItem("sort_bybidprice", JSON.stringify(sort_bybidprice));
};
BidList.bid_pricegroup=function(bidMessages){
    var count_pricegroup = _.countBy(bidMessages, function (bidMessages) {
        return bidMessages.bid_price;
    });
    var bid_pricegroup = _.map(count_pricegroup, function (value, key) {
        return {"price": key, "count": value}
    });
    localStorage.setItem('bid_pricegroup',JSON.stringify(bid_pricegroup));
    BidList.bid_success(bid_pricegroup);
};
BidList.bid_success=function(bid_pricegroup){
    var result=_.findWhere(bid_pricegroup,{count:1});
    typeof(result)=="undefined"?BidList.Nobid_success():BidList.hasbid_success(result);
};
BidList.Nobid_success=function(){
    var bid_success = JSON.parse(localStorage.getItem("bid_success")) || [];
    bid_success.person_name="";
    bid_success.bid_price="";
    bid_success.phone_number="";
    localStorage.setItem('bid_success',JSON.stringify(bid_success));
};
BidList.hasbid_success=function(result){
   var sort_bybidprice =JSON.parse(localStorage.getItem("sort_bybidprice"))||[];
   var bid_success = _.find(sort_bybidprice, function(bid_success){
        return bid_success.bid_price == result.price; });
   localStorage.setItem('bid_success',JSON.stringify(bid_success));
};