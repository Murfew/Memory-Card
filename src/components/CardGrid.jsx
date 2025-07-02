import Card from "./Card";

function CardGrid({pkmn}) {
  return (
    <div>
      {pkmn.map((item, index) => (
        <Card key={index} imageURL={item.sprites.front_default} pkmnName={item.forms[0].name}></Card>
      ))}
    </div>
  )
}

export default CardGrid;
