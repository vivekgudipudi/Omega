import { SideBar } from '../components/SideBar';
import { UseHistory } from '../contexts/history-context';
import { HistoryCard } from '../components/historyCard';



export const History = ()=> {
    const { history } = UseHistory();
    return (
        <div className="wrapper flex-row">
            <SideBar/>
            <section className="product-container flex-row justify-center">
            { history.map((item)=> <HistoryCard video={item} key={item._id}/>) }
            </section>
        { history.length === 0 && <h1> No history.</h1> }
        </div>
        
    )
}