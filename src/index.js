import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import { ExploreProvider } from "./contexts/explore-context";
import { LikedProvider } from "./contexts/liked-context";
import { WatchLaterProvider } from "./contexts/watchlater-context";
import { HistoryProvider } from "./contexts/history-context";
import { PlaylistProvider } from "./contexts/playlist-context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ExploreProvider>
          <LikedProvider>
            <WatchLaterProvider>
              <HistoryProvider>
                <PlaylistProvider>
                  <App />
                </PlaylistProvider>
              </HistoryProvider>
            </WatchLaterProvider>
          </LikedProvider>
        </ExploreProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
