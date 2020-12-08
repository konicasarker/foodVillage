export const filterOptions  = [
    {
      id: 1,
      name: "order_amount",
      title: "Minimum order amount",
      testarr : [{option: "No preference", selected: true}, {option: "10,00$ or less", selected: false}, {option: "15,00$ or less", selected: false}],
      options: [
            {option: "No preference", selected: true},
            {option: "10,00 $ or less", selected: false}, 
            {option: "15,00 $ or less", selected: false},
        ],
    },
    {
        id: 2,
        title: "Delivery costs",
        name: "delivery_cost",
        testarr : [{option: "No preference", selected: true}, {option: "Free", selected: false}, {option: "3,00 $ or less", selected: false},{option:"10,00 $ or less", selected: false}],
        options: [
              {option: "No preference", selected: true},
              {option: "Free", selected: false}, 
              {option: "3,00 $ or less", selected: false},
              {option: "10,00 $ or less", selected: false},
          ],
    }
  ];