import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImg from "./api";
import axios from "axios";
import { useState } from "react";
import ImageList from "./ImageList";

function App() {
  const [images, setImages] = useState([]);

  const searchHandle = async (value) => {
    const results = await searchImg(value);
    setImages(results);
  };

  return (
    <div className="App">
      <SearchHeader search={searchHandle} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
