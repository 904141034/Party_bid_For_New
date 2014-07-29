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
