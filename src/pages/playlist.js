import { SideBar } from '../components/SideBar';
import { PlayListCard } from '../components/playListCard';
import { UsePlayList } from '../contexts/playlist-context';
import { useState } from 'react';
import '../App.css'; 




export const Playlist = ()=> {
    const { playlists,addPlaylist } = UsePlayList();
    const [showOverlay,setShowOverlay] = useState(false);
    const [newPlaylistName,setNewPlaylistName] = useState();




    return(
        <div className="wrapper flex-row">
            <SideBar/>
            <section className="product-container flex-row justify-center">
                {
                    playlists.map((a)=> <PlayListCard item ={a}/> )
                }
            </section>
            { playlists.length === 0 && <>
            <h1> No playlists found.<br/><br/>
                <button className="btn modal-btn" style={{backgroundColor : "#1f2937"}} onClick={()=>setShowOverlay(true)}>Create Playlist</button></h1>
            { showOverlay && <><div className='overlay'></div>
            <div className='playlist-modal flex-column'>
                <div className='modal-heading flex-row justify-sb'>Create new Playlist<i className="far fa-times-circle" onClick={()=>setShowOverlay(!showOverlay)}></i></div>
                <input type='text' className='modal-input' placeholder='give me playlist name' onChange={(e)=>setNewPlaylistName(e.target.value)}></input>
                <button className="btn modal-btn" style={{backgroundColor : "#1f2937"}} onClick={()=>{addPlaylist(newPlaylistName)}}>Create</button>
                
            </div>
            </>
            
            }
            
            </> }
        </div>
    )
} 