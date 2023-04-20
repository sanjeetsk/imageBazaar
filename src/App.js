import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageGallery from "./Components/ImageGallery";

import './App.css'

function App () {
    let [image, setImage] = useState([]);
    console.log(image)

    return(
        <div className="App">
            <SearchBar addImages={setImage}/>
            <ImageGallery images={image} />
        </div>
    )
}

export default App