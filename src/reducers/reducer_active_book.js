//Reducers get two params one
// state == active state that it is in 
// second
// action == action that is performed
export default function(state = null,action){
    switch(action.type){
        case "BOOK_SELECTED":
            return action.payload;
            break;
    }

    return state;
}