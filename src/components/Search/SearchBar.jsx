import { useState } from "react";
import style from "../Search/SearchBar.module.css";

function SearchBar(props) {
   const [dato, setTex] = useState("")

   function handleChange(event){
      console.log(event.target.value)
      setTex(

         event.target.value
      )
   }

   return (
      <div className={style.container}>
         <input type='search' value={dato} onChange={handleChange} />
      <button onClick={()=> props.onSearch(dato)} className={style.addButton}>Agregar</button>
      </div>
   );
}

export default SearchBar;