import '../App.css'; 
import { SideBar } from "../components/SideBar";
import { VideoCard } from '../components/videoCard';
import { UseExplore } from '../contexts/explore-context';


export const Explore = ()=>{

    const { data,filteredData } = UseExplore()
    

    return(
        <>
        <div className="wrapper flex-row">
        <SideBar/>
        <section className="product-container flex-row justify-center">
        {filteredData.map((item)=><VideoCard video={item} key={item._id}/>)}
        </section>
        </div>

        
        </>
    )
}