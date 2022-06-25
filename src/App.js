import "./App.css";
import { EndPoints } from "./Routes/routes";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <EndPoints/>
    </div>
  );
}

export default App;
