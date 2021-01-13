export const menuHeaders = [{ menu: "Popular dishes", id: 0},
  { menu: "soup", id: 1},
  { menu: "Vegetarian dishes", id: 2},
  { menu: "Meat Items", id: 3},
  { menu: "Fish items", id: 4},
  { menu: "Cakes/Bakings", id: 5},
  { menu: "sweet and snacks", id: 6},
  { menu: "Drinks", id: 7}]

const menuItems  = [
    {
    dishId : 1,
    dishName: "soup",
    dishHeaderImage: "img/golpo/1.png",
    dishItems: [    
                {
                    menuid : 1,
                    menuName: "Lentil soup",
                    details: "red lentil soup with coconut flakes",
                    price: "3"
                },
                {
                    menuid : 2,
                    menuName: "Tomato soup",
                    details: "made with fresh tomatoes and garnished with cream",
                    price: "3,5"
                },
                {
                    menuid : 3,
                    menuName: "thai soup",
                    details: "made with fresh tomatoes and garnished with cream",
                    price: "3,5"
                },
                {
                    menuid : 4,
                    menuName: "chicken soup",
                    details: "made with fresh tomatoes and garnished with cream",
                    price: "3,5"
                }
            ],
    inCart: false,
    count: 0,
    total: 0
    },
    {
        dishId : 2,
        dishName: "Vegetarian dishes",
        dishHeaderImage: "img/golpo/2.png",
        dishItems: [
            {
                menuid : 1,
                menuName: "Mix Sabji",
                details: "Different seasonal vegetables mixed cooked together",
                price: "5"
            },
            {
                menuid : 2,
                menuName: "Chhana Masala",
                details: "With cheakpeas",
                price: "6"
            },
            {
                menuid : 3,
                menuName: "Chhana Masala",
                details: "With cheakpeas",
                price: "6"
            },
            {
                menuid : 4,
                menuName: "Chhana Masala",
                details: "With cheakpeas",
                price: "6"
            }
        ],
        inCart: false,
        count: 0,
        total: 0
    },
    {
        dishId : 3,
        dishName: "Meat Items",
        dishHeaderImage: "img/golpo/3.png",
        dishItems: [
            {
                menuid : 1,
                menuName: "Chiken tikka",
                details: "With chicken",
                price: "6"
            },
            {
                menuid : 2,
                menuName: "Lamb Curry",
                details: "With Lamb",
                price: "6"
            }
        ],
        inCart: false,
        count: 0,
        total: 0
    },
    {
        dishId : 4,
        dishName: "Fish items",
        dishHeaderImage: "img/golpo/4.png",
        dishItems: [
            {
                menuid : 1,
                menuName: "Malai chingri",
                details: "With Fish",
                price: "6"
            },
            {
                menuid : 2,
                menuName: "Tun fish kofta",
                details: "With Tun fish",
                price: "6"
            }
        ],
        inCart: false,
        count: 0,
        total: 0
    },
    {
        dishId : 5,
        dishName: "Cakes/Bakings",
        dishHeaderImage: "img/golpo/5.png",
        dishItems: [
            {
                menuid : 1,
                menuName: "Plain cake",
                details: "Delicious plain cake",
                price: "6"
            },
            {
                menuid : 2,
                menuName: "Carrot Cake",
                details: "With fresh carrot and brown sugar",
                price: "6"
            }
        ],
    },
    {
        dishId : 6,
        dishName: "Sweets&Snacks",
        dishHeaderImage: "img/golpo/6.png",
        dishItems: [
            {
                menuid : 1,
                menuName: "Rosgolla",
                details: "With cheakpeas",
                price: "6"
            },
            {
                menuid : 2,
                menuName: "Kalojam",
                details: "With cheakpeas",
                price: "6"
            }
        ],
    inCart: false,
    count: 0,
    total: 0
    },

]

export default menuItems