// Three components
import BackgroundScene from "./Three/ThreeScenes/BackgroundScene";
import CanvasContainer from "./Three/ThreeElements/CanvasContainer";
import "./Scss/style.scss";

function App() {
  return (
    <div className="App">
      <CanvasContainer>
        <BackgroundScene />
      </CanvasContainer>
    </div>
  );
}

export default App;
