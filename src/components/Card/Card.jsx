import styleCard from "./Card.module.css";
//Para mostrar los datos como tarjeta debe recibir las propiedades

//como nombre, especies, etc
export default function Card({name, species, gender, image, onClose}) {
    
   return (
      <div className={styleCard.container}>
         <button onClick={onClose} className={styleCard.closeButton}>X</button>
         <img  src={image} alt={name} className={styleCard.image}/>
        <div className= {styleCard.positionName}>
         <h2 className={styleCard.name}>  {name} </h2>
        </div>
         <h2 className={styleCard.species}> {species} </h2>
         <h2 className={styleCard.gender}>  {gender} </h2>
      </div>
   );
}
