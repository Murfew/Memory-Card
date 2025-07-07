function Card({ imageURL, pkmnName, onClick, wrong}) {

  function capitalize(name) {
    let matches = [...name.matchAll("-[A-Za-z]+")];

    switch (matches.length) {
      case 0:
        return name.charAt(0).toUpperCase() + name.slice(1);

      case 1:
        {
          let idx = name.indexOf(matches[0]);
          return name.charAt(0).toUpperCase() + name.slice(1, idx) + "-" + name.charAt(idx + 1).toUpperCase() + name.slice(idx + 2);
        }

      case 2:
        {
          let idx1 = name.indexOf(matches[0]);
          let idx2 = name.indexOf(matches[1]);
          return name.charAt(0).toUpperCase() + name.slice(1, idx1) + "-" + name.charAt(idx1 + 1).toUpperCase() + name.slice(idx1 + 2) + "-" + name.charAt(idx2 + 1).toUpperCase() + name.slice(idx2 + 2);
        }
    }
  }

  return (
     <div
      onClick={onClick}
      className="relative w-full transition-transform hover:scale-105"
    >
      {wrong && (
        <div className="absolute inset-0 rounded-2xl bg-red-500 opacity-30 blur-md animate-ping z-0 pointer-events-none"></div>
      )}

      <div className="relative z-10 bg-[#2A2A40] border border-[#3C3C5A] rounded-2xl shadow-lg p-6 text-white flex flex-col justify-between">
        <img className="m-auto" src={imageURL} alt={pkmnName} />
        <p className="text-xl font-bold mb-2 text-[#FFD700] text-center">
          {capitalize(pkmnName)}
        </p>
      </div>
    </div>
  )
}

export default Card;
