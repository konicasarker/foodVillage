export default function reducer (state={}, action){
    switch(action.type){
        case 'ADD_RESTAURANTS' : {
            return {...state, restautantsList: action.payload}
        }
        default: {
            return state
        }
    }
}