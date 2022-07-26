import { useParams } from 'react-router-dom';
import { UsePlayList } from '../contexts/playlist-context';
import { SideBar } from '../components/SideBar';
import { PlaylistDetailCard } from '../components/playlistDetailCard';


export const PlaylistDetail = ()=> {
    const { playlistID } = useParams();
    const { playlists } = UsePlayList();

    const playlistObj = playlists.find((playlist) => playlist._id === playlistID);
    
    return(
        <div className="wrapper flex-row">
            <SideBar/>
        <section className="product-container flex-row justify-center">
        { playlistObj.videos.map((item)=><PlaylistDetailCard video={item} key={item._id} playlist_id = {playlistID}/>)}
        </section>

        </div>
    )
} 

