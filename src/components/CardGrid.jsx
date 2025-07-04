import Card from "./Card";

function CardGrid({pkmn, handleCardClick}) {
  return (
    <div className="grid grid-cols-5 gap-6 justify-items-center">
      {pkmn.map((item, index) => (
        <Card key={index}
        imageURL={item.sprites.front_default}
        pkmnName={item.forms[0].name}
        onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  )
}

export default CardGrid;
