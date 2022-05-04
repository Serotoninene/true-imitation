// React Components
import Navbar from "./Components/Navbar";
// Three components
import Homepage from "./Pages/Homepage/Homepage";
import "./Scss/style.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
