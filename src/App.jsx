import Home from "./comps/Home"
import Sidebar from "./comps/Sidebar"

function App() {
  return (
    <div className="App">
      <Sidebar />

      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
