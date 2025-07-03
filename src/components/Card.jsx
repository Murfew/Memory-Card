function Card({imageURL, pkmnName, onClick}) {


  return (
    <div className ="bg-[#2A2A40] border border-[#3C3C5A] rounded-2xl shadow-lg p-6 w-64 text-white hover:scale-105 transition-transform duration-200" onClick={onClick}>
      <img src={imageURL} alt={pkmnName} />
      <p className="text-xl font-bold mb-2 text-[#FFD700]">{pkmnName.charAt(0).toUpperCase() + pkmnName.slice(1)}</p>
    </div>
  )
}

export default Card;
