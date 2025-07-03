import Card from "./Card";

function CardGrid({pkmn, handleCardClick}) {
  return (
    <div>
      {pkmn.map((item, index) => (
        <Card key={index}
        imageURL={item.sprites.front_default}
        pkmnName={item.forms[0].name}
        onClick={handleCardClick(index)}
        />
      ))}
    </div>
  )
}

export default CardGrid;
