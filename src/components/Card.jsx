function Card({imageURL, pkmnName, onClick}) {


  return (
    <div onClick={onClick}>
      <img src={imageURL} alt={pkmnName} />
      <p>{pkmnName.charAt(0).toUpperCase() + pkmnName.slice(1)}</p>
    </div>
  )
}

export default Card;
