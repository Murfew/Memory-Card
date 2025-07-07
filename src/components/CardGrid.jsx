import Card from "./Card";

function CardGrid({pkmn, handleCardClick, wrongCardId}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
      {pkmn.map((item, index) => (
        <Card key={index}
        imageURL={item.sprites.front_default}
        pkmnName={item.forms[0].name}
        onClick={() => handleCardClick(index)}
        wrong={wrongCardId === index}
        />
      ))}
    </div>
  )
}

export default CardGrid;
