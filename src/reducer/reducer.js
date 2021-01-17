export default function reducer (state={}, action){
    switch(action.type){
        case 'ADD_RESTAURANTS' : {
            return {...state, restautantsList: action.payload}
        }
        case 'ADD_FILTERS' : {
            return {...state, filterOptions: action.payload}
        }
        case 'UPDATE_LIST' : {
            return {...state, restautantsList: action.payload}
        }
        case 'ADD_RESTAURANT_DETAILS' : {
            return {...state, restaurantDetails: action.payload}
        }
        case 'UPDATE_DISH_ITEM' : {  
            const addedItem = {
                        "dishId": action.payload.dishId, 
                        "menuId": action.payload.menuId, 
                        "restaurantNameIdentifier": action.payload.restaurantNameIdentifier,
                        "menuName": action.payload.item.menuName,
                        "price": action.payload.item.price,
            }
            
            //check if the action id exists in the addedItems
            let existed_item= state.addedItems.find(item => ((action.payload.dishId === item.dishId)
                                                                        &&
                                                              (action.payload.menuId === item.menuId)
                                                                        &&
                                                               (action.payload.restaurantNameIdentifier === item.restaurantNameIdentifier)
                                                            ))
            
                
                addedItem.quantity = 1;
                const newTotal = state.total + parseInt(addedItem.price);
    
                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : newTotal
                }
            }  
        case 'DELETE_DISH_ITEM_FROM_CART' : {
            const deleteItem = state.addedItems.find(item => ((item.dishId==action.payload.dishId)&&(item.menuId==action.payload.menuId)))
            const newTotal = state.total - parseInt(deleteItem.price);
        
            return {...state, 
                     addedItems: [...state.addedItems.filter(item => !((item.dishId==action.payload.dishId)&&(item.menuId==action.payload.menuId)))],
                     total : newTotal
             }

        }                                      
        default: {
            return state
        }
    }
}