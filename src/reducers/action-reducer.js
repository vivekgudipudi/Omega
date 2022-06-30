export const ActionReducer = (state, action) => {console.log("entered dragon",action.type);
    switch (action.type) {
        case "GET_PLAYLISTS": console.log("from reducer",action.payload);
            return{
                ...state,
                playlists : action.payload
            }
        case "TOGGLE_CATEGORY" : 
            return{
                ...state,
                category : action.payload
            }
        case "GET_HISTORY":
        case "ADD_TO_HISTORY":
        case "DELETE_FROM_HISTORY":
            return {
                ...state,
                history : action.payload,
            }
        case "GET_LIKED":
        case "ADD_TO_LIKED":
        case "DELETE_FROM_LIKED":
            return { 
                ...state,
                liked : action.payload,
            }
        case "GET_WATCHLATER":
        case "ADD_TO_WATCHLATER":
        case "DELETE_FROM_WATCHLATER":
            return {
                ...state,
                    watchLater : action.payload,
            }
        
        case "ADD_PLAYLISTS":
        case "DELETE_PLAYLISTS":
            return{
                ...state,
                playlists : action.payload
            }
        case "GET_PLAYLIST":
            return{
                ...state,
                sample : action.payload
            }
        case "ADD_TO_PLAYLIST":
        case "DELETE_FROM_PLAYLIST":
            return {
                ...state,
                    playlist: action.payload };
        
          default : return state
    }
}
