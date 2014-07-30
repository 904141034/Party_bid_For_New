activity_id_generator = "1"
current_activity_id = "1";
is_bidding = "true";
is_signing_up = "false";
current_bid = "竞价2";
localStorage.actity_ids = ["0","1"];
activities = {
    "0":{
      name: "first activity",
      sign_ups:[],
      bids:[],
      biddings:{}
    },
    "1": {
        name: "second activity",
        sign_ups: [
            {
                name:"仝键",
                phone:"13600000000"
            },
            {
                name:"于硕",
                phone:"15600000000"
            },
            {
                name:"吴京川",
                phone:"13800000000"
            }
        ],
        bids:["竞价1","竞价2"],
        biddings:{
           "竞价1":[
                   {
                       phone:"13600000000",
                       price: "12"

                   },
                   {
                       phone:"15600000000",
                       price: "10"
                   }
           ],
           "竞价2": [
                {
                    phone:"13600000000",
                    price: "10"

                },
                {
                    phone:"15600000000",
                    price: "12"
                },
                {
                    phone:"13800000000",
                    price: "10"
                }
           ]
        }
    }
};

