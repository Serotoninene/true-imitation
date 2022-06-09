import { Suspense } from "react";
// React Components
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import About from "./Pages/About/About";
import Homepage from "./Pages/Homepage/Homepage";
import Test from "./Pages/Test/Test";
import Herobanner from "./Pages/Homepage/Herobanner";
import Article2 from "./Pages/Homepage/Article2";
import Article4 from "./Pages/Homepage/Article4";
import CustomCursor from "./Components/CustomCursor";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styling
import "./Scss/style.scss";
import { CursorProvider } from "./Utilitaries/Contexts/CursorContext";

function App() {
  return (
    <div className="App">
      <CursorProvider>
        <CustomCursor />
        <Suspense fallback={<Loader />}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/article" element={<Article2 />} />
              <Route path="/test" element={<Herobanner />} />
            </Routes>
          </Router>
        </Suspense>
      </CursorProvider>
    </div>
  );
}

export default App;
