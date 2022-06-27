import { NavLink } from "react-router-dom"
import { UseExplore } from "../contexts/explore-context"

export const SideBar = ()=> {
    const { dispatch } = UseExplore()
    return (
        <>
            
            <aside className="side-bar-container flex-column">
            <NavLink className="side-bar-heading t4" to='/' onClick={() => dispatch({ type: "TOGGLE_CATEGORY",payload : '' })}>EXPLORE</NavLink>
            <NavLink className="side-bar-heading t4" to='/playlist'>PLAYLISTS</NavLink>
            <NavLink className="side-bar-heading t4" to='/liked'>LIKED VIDEOS</NavLink>
            <NavLink className="side-bar-heading t4" to='/watchlater'>WATCH LATER</NavLink>
            <NavLink className="side-bar-heading t4" to = '/history'>HISTORY</NavLink>
            </aside>
            
        </>
    )
}