import Card from "../Card/Card";
import styles from "./Cards.module.css";


function Cards(props) { //es un array de objetos
    const { characters, onClose } = props;

   return (
      <div className= {styles.container} >
      {
         //en relacion de objetos literales, esto es un ejemplo
         characters.map((ele) => {
           return <span>
            <Card key={ele.id}
                  name={ele.name}
                  species={ele.species}
                  gender={ele.gender}
                  image={ele.image}
                  onClose={() => onClose(ele.id)}           
            />
          
           </span>
            
         })
      }
   </div>
   )
}
export default Cards;