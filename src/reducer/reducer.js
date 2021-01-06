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
        default: {
            return state
        }
    }
}