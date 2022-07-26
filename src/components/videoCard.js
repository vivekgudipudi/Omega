import { useState } from 'react';
import '../App.css'; 
import { UseLiked } from '../contexts/liked-context';
import { UseWatchLater } from '../contexts/watchlater-context';
import { UseHistory } from '../contexts/history-context';
import { Link } from 'react-router-dom';
import { UsePlayList } from '../contexts/playlist-context';

export const VideoCard = ({video})=> {
    const [showVideoOptions,setShowVideoOptions] = useState(false);
    const { liked,removeFromLiked,addToLiked } = UseLiked();
    const { watchLater, removeFromWatchLater, addToWatchLater} = UseWatchLater();
    const { addToHistory } = UseHistory();
    const { playlists,addPlaylist,addToPlaylist  } = UsePlayList()
    const [showOverlay,setShowOverlay] = useState(false);
    const [newPlaylistName,setNewPlaylistName] = useState();



    return(
        <> 
        <div className="card-vertical card" >
        <Link to={`/${video._id}`}>
        <img src={video.imgPreview}alt={video.title} className="card-img" onClick = {()=> addToHistory(video)}/>
        </Link>
        <div className="card-header card-header-vl"><Link to={`/${video._id}`}>
            <div className="card-title"  onClick = {()=>{addToHistory(video)}}>{video.title}</div></Link>
            <div className=" justify-sb align-center flex-row"><div className='card-sub-title'>{video.creator}</div>
            <i className="card-icon fa fa-ellipsis-v" onClick={()=>setShowVideoOptions(!showVideoOptions)} aria-hidden="true"></i></div>
            {showVideoOptions && <ul className='video-option-container'>
                <li className='video-option' onClick={()=>setShowOverlay(!showOverlay)}><big>+</big> Add to playlist</li>
            { watchLater.find((item)=>item._id === video._id) 
                ? <li className='video-option' onClick={()=>removeFromWatchLater(video)}><big>--</big> Watch later</li>
                : <li className='video-option' onClick={()=> addToWatchLater(video)}><big>+</big> Watch later</li>
                
            }
            { showOverlay && <><div className='overlay'></div>
            <div className='playlist-modal flex-column'>
                <div className='modal-heading flex-row justify-sb'>Add to Playlist<i className="far fa-times-circle" onClick={()=>setShowOverlay(!showOverlay)}></i></div>
                <div className='modal-body flex-column'>
                    <ul> {playlists.map((a)=><>
                        <li><input type='checkbox' onClick={()=> addToPlaylist(video,a)}/>{a.title}</li>
                    </>)}
                    
                        
                    </ul>
                </div>
                <input type='text' className='modal-input' placeholder='create new playlist here' onChange={(e)=>setNewPlaylistName(e.target.value)}></input>
                <button className="btn modal-btn" onClick={()=>{addPlaylist(newPlaylistName)}}>Create</button>
                
            </div>
            </>
            
            }

            
            { liked.find((item)=>item._id === video._id) 
                ? <li className='video-option' onClick={()=>removeFromLiked(video)}><big>--</big> Liked videos</li>
                : <li className='video-option' onClick={()=> addToLiked(video)}><big>+</big> Liked videos</li>
                
            }
            </ul>}
            
        </div>
        <div className="card-text">
            {video.description}
        </div>
          
        
        </div>
        </>
    )
}

