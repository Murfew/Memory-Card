function Card({imageURL, pkmnName, onClick}) {


  return (
    <div onClick={onClick}>
      <img src={imageURL} alt={pkmnName} />
      <p>{pkmnName}</p>
    </div>
  )
}

export default Card;
