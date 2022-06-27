import '../App.css'; 
import { SideBar } from '../components/SideBar';
import ReactPlayer from "react-player/youtube";
import { useParams } from 'react-router-dom';
import { UseExplore } from '../contexts/explore-context';
import { UseLiked } from '../contexts/liked-context';
import { UseWatchLater } from '../contexts/watchlater-context';



export const VideoDetail = ()=> {
    const { liked,removeFromLiked,addToLiked } = UseLiked();
    const { watchLater, removeFromWatchLater, addToWatchLater } = UseWatchLater();
    const {data} = UseExplore();
    const { videoID } = useParams();


    return (
        <div className="wrapper flex-row">
            <div className="flex-column justify-center card-video">
            {<ReactPlayer
				url={`https://www.youtube.com/watch/${videoID}`}
				width="100%"
				playing={true}
				controls
                />
            }
            <div class ='flex-row justify-center card-video-iconbox' >

            {
                liked.find((item)=> item._id === videoID)
                ? <i className="fas fa-thumbs-up video-action-icon" onClick={()=>removeFromLiked(data.find((a)=>a._id === videoID))}></i>
                : <i className="fal fa-thumbs-up video-action-icon" onClick={()=>addToLiked(data.find((a)=>a._id === videoID))}></i>
            }
            {
                watchLater.find((item)=> item._id === videoID)
                ? <i className="fas fa-clock video-action-icon" onClick={()=>removeFromWatchLater(data.find((a)=>a._id === videoID))}></i>
                : <i className="fal fa-clock video-action-icon" onClick={()=>addToWatchLater(data.find((a)=>a._id === videoID))}></i>
            }


            
                
           
                
                
                </div>
            </div>
            <SideBar/>
            
            
        </div>
        
        
    )
}
