function Card({imageURL, pkmnName}) {
  return (
    <div>
      <img src={imageURL} alt={pkmnName} />
      <p>{pkmnName}</p>
    </div>
  )
}

export default Card;
