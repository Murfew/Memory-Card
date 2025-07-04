import Card from "./Card";

function CardGrid({pkmn, handleCardClick}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
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
