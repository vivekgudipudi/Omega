import { Routes, Route } from "react-router-dom";
import { Explore } from "../pages/explore";
import { Playlist } from "../pages/playlist";
import { Liked } from "../pages/liked";
import { WatchLater } from "../pages/watchLater";
import { History } from "../pages/history";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { PlaylistDetail } from "../pages/playlistDetail";
import { VideoDetail } from "../pages/videoDetail";
import { RequiresAuth } from "../require-auth";


const EndPoints = ()=>{
    return(
        <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore/:videoID" element={<VideoDetail />} />

        <Route path="/playlist" element={
            <RequiresAuth>
                <Playlist />
            </RequiresAuth>} />

        <Route path="/:playlistID" element = {<PlaylistDetail/>} />

        <Route path="/liked" element={
            <RequiresAuth>
                <Liked />
            </RequiresAuth>} />

        <Route path="/watchlater" element={
            <RequiresAuth>
                <WatchLater />
            </RequiresAuth>} />

        <Route path="/history" element={
            <RequiresAuth>
                <History />
            </RequiresAuth>} />
            
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}


export { EndPoints }


