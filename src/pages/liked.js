import { SideBar } from '../components/SideBar';
import { UseLiked } from '../contexts/liked-context';
import { LikedCard } from '../components/likedCard';

export const Liked = ()=>{
    const { liked } = UseLiked()

    return(
        <div className="wrapper flex-row">
        <SideBar/>
        <section className="product-container flex-row justify-center">
            { liked.map((item)=> <LikedCard video={item} key={item._id}/>) }
        </section>
        { liked.length === 0 && <h1> No videos liked.</h1> }
        </div>

    )
}