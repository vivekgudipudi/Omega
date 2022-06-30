import { createContext, useContext, useReducer } from "react";
import axios from 'axios';
import { ActionReducer } from "../reducers/action-reducer";


const HistoryContext = createContext([]);

const HistoryProvider = ({children}) =>{

    const [{history},dispatch] = useReducer(ActionReducer, {
        history : []
    })

    const token = localStorage.getItem("token");

    (async () => {
        try{
            const response = await axios.get('/api/user/history',
            {
                headers: { authorization: token }
            });
            if(response.data.status === 200){;
                dispatch({
                    type : "GET_HISTORY",
                    payload : response.data.history
                })
            }
        }
        catch(error){
            console.log(error.response)
        }
    })()


    const addToHistory = async(video) => {
            try{
                const response = await axios.post("/api/user/history",
                {video},
                {
                    headers: { authorization: token }
                }
                )
                if (response.status === 201) {
                    dispatch({
                      type: "ADD_TO_HISTORY",
                      payload: response.data.history
                    })
                  }
            }
            catch(error){
                console.log(error.response)
            }
        }

    const removeFromHistory = async(video) => {
        try{
            const response = await axios.delete(`/api/user/history/${video._id}`,
            {
                headers: { authorization: token }
            })
            if(response.status === 200) {
                dispatch({
                  type: "DELETE_FROM_HISTORY",
                  payload: response.data.history,
                })
            }

        }
        catch(error){console.log(error)}
    }

    
    return(
        <HistoryContext.Provider value={{history, addToHistory, removeFromHistory}}>
            {children}
        </HistoryContext.Provider>
    )
}

const UseHistory = ()=> useContext(HistoryContext)

export { HistoryProvider,UseHistory }