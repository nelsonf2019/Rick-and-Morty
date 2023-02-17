import React from "react"
import SearchBar from "../Search/SearchBar"
import styleNav from "./Nav.module.css";

const Nav =(props)=>{
    return(
        <div className= {styleNav.container} >
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

export default Nav;