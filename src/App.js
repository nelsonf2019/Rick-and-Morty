import './App.css'
import { useState } from 'react'
import Card from './components/Card/Card'
import Cards from './components/Cards/Cards'
import SearchBar from './components/Search/SearchBar'
import Nav from './components/Nav/Nav'

function App () {

  const [characters, setCharacters] = useState([]);

  const onSearch=(dato)=>{
    fetch(`https://rickandmortyapi.com/api/character/${dato}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
}
  function onClose(id){
    setCharacters(characters.filter(personaje => personaje.id !==id))
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
       
        <Nav onSearch={onSearch} />
       
      <hr />
      <div >
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
      
    </div>
  )
}

export default App
