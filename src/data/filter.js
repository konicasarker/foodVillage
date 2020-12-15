export const filterOptions  = [
    {
      id: 1,
      name: "order_amount",
      title: "Minimum order amount",
      options: [
            {option: "No preference", id:1, selected: "true", value:0},
            {option: "10,00 $ or less", id:2, selected: "false", value:10}, 
            {option: "15,00 $ or less", id:3, selected: "false", value:15},
        ],
    },
    {
        id: 2,
        title: "Delivery costs",
        name: "delivery_cost",
        options: [
              {option: "No preference", id:1, selected: "true", value:0},
              {option: "Free", id:2, selected: "false", value:0}, 
              {option: "3,00 $ or less", id:3, selected: "false", value:3},
              {option: "10,00 $ or less", id:4, selected: "false", value:10},
          ],
    }
  ];