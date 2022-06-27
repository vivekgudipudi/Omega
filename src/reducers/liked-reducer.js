export const LikedReducer = (state, action) => {
    switch(action.type){
        case "GET_LIKED":
        case "ADD_TO_LIKED":
        case "DELETE_FROM_LIKED":
            return {
                ...state,
                liked : action.payload,
            }
            default : return state;
    }
}


