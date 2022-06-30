import { createContext, useContext, useReducer } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth-context";
import { ActionReducer } from "../reducers/action-reducer";


const WatchLaterContext = createContext([]);

const WatchLaterProvider = ({children}) =>{

    const [{watchLater},dispatch] = useReducer(ActionReducer, {
        watchLater : []
    })

    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    const { isLoggedIn } = useAuth();

    (async () => {
        try{
            const response = await axios.get('/api/user/watchlater',
            {
                headers: { authorization: token }
            });
            if(response.data.status === 200){;
                dispatch({
                    type : "GET_WATCHLATER",
                    payload : response.data.watchlater
                })
            }
        }
        catch(error){
            console.log(error.response)
        }
    })()


    const addToWatchLater = async(video) => {
        if(isLoggedIn){
            try{
                const response = await axios.post("/api/user/watchlater",
                {video},
                {
                    headers: { authorization: token }
                }
                )
                if (response.status === 201) {
                    dispatch({
                      type: "ADD_TO_WATCHLATER",
                      payload: response.data.watchlater
                    })
                  }
            }
            catch(error){
                console.log(error.response)
            }
        }
        else{
            navigate("/login")
        } 
    }

    const removeFromWatchLater = async(video) => {
        try{
            const response = await axios.delete(`/api/user/watchlater/${video._id}`,
            {
                headers: { authorization: token }
            })
            if(response.status === 200) {
                dispatch({
                  type: "DELETE_FROM_WATCHLATER",
                  payload: response.data.watchlater,
                })
            }

        }
        catch(error){console.log(error)}
    }

    







    return(
        <WatchLaterContext.Provider value={{watchLater, addToWatchLater, removeFromWatchLater}}>
            {children}
        </WatchLaterContext.Provider>
    )
}

const UseWatchLater = ()=> useContext(WatchLaterContext)

export { WatchLaterProvider,UseWatchLater }