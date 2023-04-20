import React, {useState} from "react"
import axios from "axios";

const SearchBar = ({addImages}) => {
    let [searchTerm, setSearchTerm] = useState("");

    const handleSearch = async (e) => {
        console.log("code is hitting here");
        e.preventDefault();
        const response = await axios.get("https://api.unsplash.com/search/photos",{
            params: {query: searchTerm},
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            }
        })
        addImages(response.data.results);
    }

    return(
        <div>
            <input 
                type="text"
                placeholder="Search"
                onChange={(e)=>setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <button type="button" onClick={handleSearch}>Search</button>
        </div>
    )
}


export default SearchBar