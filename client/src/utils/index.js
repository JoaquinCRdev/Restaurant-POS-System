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

export const getAvatarName = (name) => {
  if (!name) return ""

  return name.split(" ").map(word => word[0]).join("").toUpperCase();
}

export const formatDate = (date) => {
  const month = date.toLocaleString('es-ES', { month: 'long' });
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};