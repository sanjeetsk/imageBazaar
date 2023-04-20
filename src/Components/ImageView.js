import React, {useState} from "react";

const ImageView = ({photo}) => {
    let [isClicked, setIsClicked] = useState(false);

    return(
        <div onClick={() => setIsClicked(!isClicked)}
        className={`image-view ${isClicked ? 'expand' : ''}`}
        >
            <img src={photo.urls.small} alt={photo.alt_description} />
            {
                isClicked && 
                <div className="image-details">
                    <h3>{photo.alt_description || "untitled"}</h3>
                    <p>By: {photo.user.name || "Anonymous"}</p>
                </div>
            }

        </div>
    )
}

export default ImageView