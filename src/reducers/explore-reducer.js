


const ExploreReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_CATEGORY" : {
            return{
                ...state,
                category : action.payload
            }
          }
          default : return state
    }
}

export { ExploreReducer }