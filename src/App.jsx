import { useState } from "react";
import Home from "./comps/Home";
import MainNav from "./comps/MainNav";
import styles from "./styles/Dimmer.module.css";

function App() {
  const [isDimmerActive, setIsDimmerActive] = useState(false);

  const toggleDimmer = () => {
    setIsDimmerActive((prev) => !prev);
  };

  return (
    <div className="App">
      <MainNav toggleDimmer={toggleDimmer} />

      <main>
        <div
          className={`${styles.dimmer} ${isDimmerActive ? styles.active : ""}`}
        ></div>
        <Home />
      </main>
    </div>
  );
}

export default App;
