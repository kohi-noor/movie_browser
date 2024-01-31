import React from "react";
import Hero from "./Hero";

function SearchView({ textKeyword, searchKeyword }){
    const title = `You are searching for ${textKeyword}`;
    return(
        <>
            <Hero text={title}/>
            
        </>
    )
}

export default SearchView;