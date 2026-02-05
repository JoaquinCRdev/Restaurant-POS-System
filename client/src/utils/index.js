export const getRandomBG = () => {

const colors = [
    "bg-[#C9A9E0]", // morado pastel
    "bg-[#F4B6C2]", // rosa pastel
    "bg-[#D66A6A]", // carmesí suave
    "bg-[#CFEFA0]", // verde lima pastel
    "bg-[#C7A58B]", // marrón claro
    "bg-[#E88ACF]", // fucsia pastel
    "bg-[#F4A86B]", // naranja pastel
    "bg-[#F7E08A]"  // amarillo pastel
];

  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
};
