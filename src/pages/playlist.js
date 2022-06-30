import { SideBar } from '../components/SideBar';
import { PlayListCard } from '../components/playListCard';
import { UsePlayList } from '../contexts/playlist-context';



export const Playlist = ()=> {
    const { playlists } = UsePlayList()



    return(
        <div className="wrapper flex-row">
            <SideBar/>
            <section className="product-container flex-row justify-center">
                {
                    playlists.map((a)=> <PlayListCard item ={a}/> )
                }
            </section>
        </div>
    )
} 