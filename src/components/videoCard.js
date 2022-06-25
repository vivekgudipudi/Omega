import { useState } from 'react';
import '../App.css'; 
export const VideoCard = ({video})=> {
    const [showVideoOptions,setShowVideoOptions] = useState(false)

    return(
        <>   
        <div className="card-vertical card">
        <img src={video.imgPreview}alt="kedarnath" className="card-img"/>
        <div className="card-header card-header-vl">
            <div className="card-title">{video.title}</div>
            <div className=" justify-sb align-center flex-row"><div className='card-sub-title'>{video.creator}</div>
            <i className="card-icon fa fa-ellipsis-v" onClick={()=>setShowVideoOptions(!showVideoOptions)} aria-hidden="true"></i></div>
            {showVideoOptions && <ul className='video-option-container'>
                <li className='video-option'><big>+</big> Add to playlist</li>
                <li className='video-option'><big>+</big> Watch later</li>
                <li className='video-option'><big>+</big> Liked videos</li>
            </ul>}
            
        </div>
        <div className="card-text">
            {video.description}
        </div>
          
        
        </div>
        </>
    )
}

