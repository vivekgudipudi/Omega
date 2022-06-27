import { SideBar } from '../components/SideBar';
import { UseWatchLater } from '../contexts/watchlater-context';
import { LikedCard } from '../components/likedCard';


export const WatchLater = ()=> {
    const { watchLater } = UseWatchLater()


    return(
        <div className="wrapper flex-row">
        <SideBar/>
        <section className="product-container flex-row justify-center">
            { watchLater.map((item)=><LikedCard video={item} key={item._id}/>) }
        </section>
        { watchLater.length === 0 && <h1> No videos saved.</h1> }
        </div>
        
    )
} 