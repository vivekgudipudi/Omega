import { UseExplore } from "../contexts/explore-context"

export const SideBar = ()=> {
    const { dispatch } = UseExplore()
    return (
        <>
            
            <aside className="side-bar-container flex-column">
            <div className="side-bar-heading t4" onClick={() => dispatch({ type: "TOGGLE_CATEGORY",payload : '' })}>EXPLORE</div>
            <div className="side-bar-heading t4">PLAYLISTS</div>
            <div className="side-bar-heading t4">LIKED VIDEOS</div>
            <div className="side-bar-heading t4">WATCH LATER</div>
            <div className="side-bar-heading t4">HISTORY</div>
            </aside>
            
        </>
    )
}