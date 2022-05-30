import react, { useState } from "react";
// React Components
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
// Three components
import Homepage from "./Pages/Homepage/Homepage";
import "./Scss/style.scss";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Homepage />
        </>
      )}
    </div>
  );
}

export default App;
