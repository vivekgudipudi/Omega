import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth-context";
import { ActionReducer } from "../reducers/action-reducer";


const PlayListContext = createContext([]);

const PlaylistProvider = ({children})=>{
    const[boolswitch,setBoolswitch] = useState(false);
    const [{playlists,playlist},dispatch] = useReducer(ActionReducer,{
        playlists : [],
        playlist : [],
    })
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    const { isLoggedIn } = useAuth();
    useEffect(()=>{(async () => {
        try{
            const response = await axios.get('/api/user/playlists',
            {
                headers: { authorization: token }
            });
           
                dispatch({
                    type : "GET_PLAYLISTS",
                    payload : response.data.playlists
                })
            
        }
        catch(error){
            console.log(error.response)
        }
    })()},[boolswitch,token])

    // const get_playlists =
     
    

    const addPlaylist = async(name) => {
        if(isLoggedIn){
            try{
                const response = await axios.post("/api/user/playlists",
                { playlist: {title : name } },
                {
                    headers: { authorization: token }
                }
                );
                if (response.status === 201) {
                    dispatch({
                      type: "ADD_PLAYLISTS",
                      payload: response.data.playlists
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
    const removePlaylist = async(item) => {
        try{
            const response = await axios.delete(`/api/user/playlists/${item._id}`,
            {
                headers: { authorization: token }
            })
            if(response.status === 200) {
                dispatch({
                  type: "DELETE_PLAYLISTS",
                  payload: response.data.playlists,
                })
            }

        }
        catch(error){console.log(error.response)}
    }

    const getPlaylist = async (item) => {
        try{
            const response = await axios.get(`/api/user/playlists/${item._id}`,
            {
                headers: { authorization: token }
            });

            if(response.data.status === 200){
                dispatch({
                    type : "GET_PLAYLIST",
                    payload : response.data.playlist
                })
            }
        }
        catch(error){
            console.log(error.response)
        }
    }

    const addToPlaylist = async(video,a) => {
        if(isLoggedIn){
            try{
                const response = await axios.post(`/api/user/playlists/${a._id}`,
                { video  },
                {
                    headers: { authorization: token }
                }
                );
                if (response.status === 201) {
                    dispatch({
                      type: "ADD_TO_PLAYLIST",
                      payload: response.data.playlist
                    });setBoolswitch((prev)=>!prev)
                  }
            }
            catch(error){
                console.log(error.response.data)
            }
        }
        else{
            navigate("/login")
        }
    }
    const removeFromPlaylist = async(video,playlistID) => { console.log("working",video,playlistID)
        try{
            const response = await axios.delete(`/api/user/playlists/${playlistID}/${video._id}`,
            {
                headers: { authorization: token }
            })
                dispatch({
                  type: "DELETE_FROM_PLAYLIST",
                  payload: response.data.playlist,
                })
                
        }
        catch(error){console.log(error.response)}
    }

    return(
        <PlayListContext.Provider value={{playlists,removeFromPlaylist, addPlaylist, removePlaylist,addToPlaylist,playlist,getPlaylist,setBoolswitch}}>
            {children}
        </PlayListContext.Provider>
    )
}



const UsePlayList = ()=> useContext(PlayListContext)
export { PlaylistProvider, UsePlayList}