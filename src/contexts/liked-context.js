import { createContext, useContext, useReducer } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth-context";
import { ActionReducer } from "../reducers/action-reducer";



const LikedContext = createContext([]);

const LikedProvider = ({children}) =>{

    const [{liked},dispatch] = useReducer(ActionReducer, {
        liked : []
    })

    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    const { isLoggedIn } = useAuth();

    (async () => {
        try{
            const response = await axios.get('/api/user/likes',
            {
                headers: { authorization: token }
            });
            if(response.data.status === 200){;
                dispatch({
                    type : "GET_LIKED",
                    payload : response.data.likes
                })
            }
        }
        catch(error){
            console.log(error.response)
        }
    })()


    const addToLiked = async(video) => {
        if(isLoggedIn){
            try{
                const response = await axios.post("/api/user/likes",
                {video},
                {
                    headers: { authorization: token }
                }
                )
                if (response.status === 201) {
                    dispatch({
                      type: "ADD_TO_LIKED",
                      payload: response.data.likes
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

    const removeFromLiked = async(video) => {
        try{
            const response = await axios.delete(`/api/user/likes/${video._id}`,
            {
                headers: { authorization: token }
            })
            if(response.status === 200) {
                dispatch({
                  type: "DELETE_FROM_LIKED",
                  payload: response.data.likes,
                })
            }

        }
        catch(error){console.log(error)}
    }

    







    return(
        <LikedContext.Provider value={{liked, addToLiked, removeFromLiked}}>
            {children}
        </LikedContext.Provider>
    )
}

const UseLiked = ()=> useContext(LikedContext)

export { LikedProvider,UseLiked }