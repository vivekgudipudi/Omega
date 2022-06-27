import { useState } from 'react';
import '../App.css'; 
import { UseLiked } from '../contexts/liked-context';
import { UseWatchLater } from '../contexts/watchlater-context';
import { UseHistory } from '../contexts/history-context';


export const HistoryCard = ({video})=> {
    const [showVideoOptions,setShowVideoOptions] = useState(false);
    const { liked,removeFromLiked,addToLiked } = UseLiked();
    const { watchLater, removeFromWatchLater, addToWatchLater } = UseWatchLater();
    const { history, removeFromHistory } = UseHistory();



    return(
         
        <div className="card-vertical card card-liked">
        <img src={video.imgPreview}alt="kedarnath" className="card-img"/>
        <div className="card-header card-header-vl">
            <div className="card-title">{video.title}</div>
            <div className=" justify-sb align-center flex-row"><div className='card-sub-title card-history' onClick={()=>removeFromHistory(video)}><i class="fas fa-trash"></i></div>
            <i className="card-icon fa fa-ellipsis-v" onClick={()=>setShowVideoOptions(!showVideoOptions)} aria-hidden="true"></i></div>
            {showVideoOptions && <ul className='video-option-container'>
                <li className='video-option'><big>+</big> Add to playlist</li>
            { watchLater.find((item)=>item._id === video._id) 
                ? <li className='video-option' onClick={()=>removeFromWatchLater(video)}><big>--</big> Watch later</li>
                : <li className='video-option' onClick={()=> addToWatchLater(video)}><big>+</big> Watch later</li>
                
            }
            { liked.find((item)=>item._id === video._id) 
                ? <li className='video-option' onClick={()=>removeFromLiked(video)}><big>--</big> Liked videos</li>
                : <li className='video-option' onClick={()=> addToLiked(video)}><big>+</big> Liked videos</li>   
            }
            
            </ul>}
            
        </div>
        
        </div>
    )
}

