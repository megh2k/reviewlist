import React from "react";

import {Link} from "react-router-dom"

export default function Navbar(props){
    return(

        <nav className  = "navbar">
            <h1>{props.title}</h1>
            <Link to = "/reviewlist/home" className="href">Home</Link> 
            <Link to="/reviewlist/currently_watching" className="href">Currently Watching</Link>
            <Link to = "/reviewlist/favourites" className="href">Favourites</Link> 
        </nav>
    )
}
