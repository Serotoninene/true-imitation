import { useState, useEffect, Suspense, useContext } from "react";
// React Components
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import About from "./Pages/About/About";
import Homepage from "./Pages/Homepage/Homepage";
import Test from "./Pages/Test/Test";
import Article4 from "./Pages/Homepage/Article4";
// Global Context
import { AssetProvider } from "./Utilitaries/Contexts/AssetContext";
import {
  GlobalProvider,
  useGlobalStateContext,
  useGlobalDispatchContext,
  GlobalStateContext,
} from "./Utilitaries/Contexts/GlobalContext";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Context
// Assets
import imgs from "./images";
// Styling
import "./Scss/style.scss";
import Contact from "./Pages/Homepage/Contact";
import CustomCursor from "./Components/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);

  // Okay so here is the hassle, I tried several things to preload all the images of the site
  // on launch.

  // 1st attempt : put everyting in the browser cache, no idea how it works, and actually it doesn't :)
  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises).then(console.log("all images are cached up"));
  };

  // 2nd attempt : load all the images directly, I feel like it's kinda the same thing as the 1st attempt
  // At the only exception that I did a js file where i gathered all the images, didn't find real use for it yet
  const loadImage = (image) => {
    return new Promise((resolve, reject) => {
      const loadImg = new Image();
      loadImg.src = image.url;
      // wait 2 seconds to simulate loading time
      loadImg.onload = () => resolve(image.url);
      loadImg.onerror = (err) => reject(err);
    });
  };

  useEffect(() => {
    // And here I trigger the functions, calling the imgs file not working at all
    // Promise.all(imgs.map((image) => loadImage(image.asset)))
    //   .then(() => {
    //     console.log("imgs have loaded ?");
    //     setLoading(false);
    //   })
    //   .catch((err) => console.log("Failed to load images", err));
  }, []);

  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  // Checking the cursor type
  const onCursor = (cursorType) => {
    cursorType = cursorStyles.includes(cursorType) && cursorType;
    dispatch({ type: "CURSOR_TYPE", action: cursorType });
  };

  return (
    <div className="App">
      <GlobalProvider>
        <CustomCursor />
        <Suspense fallback={<Loader />}>
          <Router>
            <Navbar onCursor={onCursor} />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/article" element={<Contact />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </Router>
        </Suspense>
      </GlobalProvider>
    </div>
  );
}

export default App;
