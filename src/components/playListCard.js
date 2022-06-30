// import { useState } from 'react';
import '../App.css'; 
import { Link } from 'react-router-dom';
import { UsePlayList } from '../contexts/playlist-context';




export const PlayListCard = ({item})=> {
    
    const { removePlaylist } = UsePlayList()

    return(
        <>   
        <div className="playlist-card flex-column align-center">
            <Link to={`/playlists/${item._id}`} style = {{width:'100%'}}>
            <div className="card-header playlist-card-title t4">
                <div 
                >{item.title}</div>
            </div>
            </Link>
            <div className='playlist-footer' onClick={()=>removePlaylist(item)}>
                <i className="fas fa-trash"></i>
            </div>
        </div>
        </>
    )
}

