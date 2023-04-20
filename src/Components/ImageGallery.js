import React from "react";
import ImageView from "./ImageView";

let c=0
const ImageGallery = ({images}) =>{

    return(
        <div className="image-gallery">
            {
                images.map((photo, index) => (
                    <ImageView key={c++} photo={photo} />
                ))
            }
        </div>
    )
}




export default ImageGallery