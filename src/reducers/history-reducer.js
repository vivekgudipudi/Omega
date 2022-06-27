export const HistoryReducer = (state, action) => {
    switch(action.type){
        case "GET_HISTORY":
        case "ADD_TO_HISTORY":
        case "DELETE_FROM_HISTORY":
            return {
                ...state,
                history : action.payload,
            }
            default : return state;
    }
}