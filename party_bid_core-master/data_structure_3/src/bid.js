function Bid(bid_name,current_activity){
    this.name=bid_name;
    this.activity_id=current_activity;
    this.biddings=[];
}
function create_new_bid(current_activity){
    var bids = JSON.parse(localStorage.bids);
    var bid_name="竞价"+(bids.length+1).toString();
    var bid=new Bid(bid_name,current_activity);
    bids.push(bid);
    Bid.setBids(bids);
};
Bid.setBids=function(bids){
    localStorage.setItem('bids',JSON.stringify(bids)) ;
};