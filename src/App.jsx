import Home from "./comps/Home";
import Sidebar from "./comps/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar />
      </div>

      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
