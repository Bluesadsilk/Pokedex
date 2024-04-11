const colorByType = {
    normal: "bg-[#BCBCAC]",
    fighting: "bg-[#BC5442]",
    flying: "bg-[#669AFF]",
    poison: "bg-[#AB549A]",
    ground: "bg-[#DEBC54]",
    rock: "bg-[#BCAC66]",
    bug: "bg-[#ABBC1C]",
    ghost: "bg-[#6666BC]",
    steel: "bg-[#ABACBC]",
    fire: "bg-[#FF421C]",
    water: "bg-[#2F9AFF]",
    grass: "bg-[#78CD54]",
    electric: "bg-[#FFCD30]",
    psychic: "bg-[#FF549A]",
    ice: "bg-[#78DEFF]",
    dragon: "bg-[#7866EF]",
    dark: "bg-[#785442]",
    fairy: "bg-[#FFACFF]",
    unknown: "",
    shadow: "",
  };
  
  const colorByStat = {
    "hp": "bg-red-500 bg-slate-100",
    "attack": "bg-orange-500 bg-slate-100",
    "defense": "bg-yellow-500 bg-slate-100",
    "special-attack": "bg-blue-500 bg-slate-100",
    "special-defense": "bg-green-500 bg-slate-100",
    "speed": "bg-pink-500 bg-slate-100",
  };

  const statNames = {
    "hp":"HP",
    "attack":"ATK",
    "defense":"DEF",
    "special-attack":"SpA",
    "special-defense":"SpD",
    "speed":"SPD"
  }
  
  export { colorByType, colorByStat, statNames };