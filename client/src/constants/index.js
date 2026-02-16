import butterChicken from "/butter-chicken-4.jpg"
import palakPaneer from "/Saag-Paneer-1.jpg"

export const popularDishes = [
    {
        id: 1,
        image: butterChicken,
        name: "Butter Chicken",
        numberOfOrders: 150,
    },
    {
        id: 2,
        image: palakPaneer,
        name: "Palak Paneer",
        numberOfOrders: 120,
    },
    {
        id: 3,
        image: butterChicken,
        name: "Butter Chicken",
        numberOfOrders: 90,
    },
    {
        id: 4,
        image: palakPaneer,
        name: "Palak Paneer",
        numberOfOrders: 80,
    },
    {
        id: 5,
        image: butterChicken,
        name: "Butter Chicken",
        numberOfOrders: 70,
    },
    {
        id: 6,
        image: palakPaneer,
        name: "Palak Paneer",
        numberOfOrders: 60,
    },
    {
        id: 7,
        image: butterChicken,
        name: "Butter Chicken",
        numberOfOrders: 50,
    },
    {
        id: 8,
        image: palakPaneer,
        name: "Palak Paneer",
        numberOfOrders: 40,
    },

]

export const tables = [
    {
        id: 1,
        name: "Mesa 1",
        status: "Libre",
        initial: "",
        seats: 5,
    },
    {
        id: 2,
        name: "Mesa 2",
        status: "Ocupada",
        initial: "JC",
        seats: 4
    },
    {
        id: 3,
        name: "Mesa 3",
        status: "Libre",
        initial: "",
        seats: 2
    },
    {
        id: 4,
        name: "Mesa 4",
        status: "Ocupada",
        initial: "LT",
        seats: 1
    },
    {
        id: 5,
        name: "Mesa 5",
        status: "Libre",
        initial: "",
        seats: 5
    },
    {
        id: 6,
        name: "Mesa 6",
        status: "Ocupada",
        initial: "KP",
        seats: 4
    },
]

export const tortas = [
    {
        id: 1,
        name: "Brownie",
        price: 8000
    },
    {
        id: 2,
        name: "Tiramisu",
        price: 7500
    },
    {
        id: 3,
        name: "Cheesecake",
        price: 7000
    },
    {
        id: 4,
        name: "Chocotorta",
        price: 5000
    },
    {
        id: 5,
        name: "Lemon Pie",
        price: 6000
    },
    {
        id: 6,
        name: "Carrot Cake",
        price: 9000
    },
    {
        id: 7,
        name: "Struesel de Manzana",
        price: 6500
    }
]

export const cafe = [
    {
        id: 1,
        name: "Café Americano",
        price: 2500
    },
    {
        id: 2,
        name: "Café con Leche",
        price: 3000
    },
    {
        id: 3,
        name: "Cappuccino",
        price: 2500
    },
    {
        id: 4,
        name: "Latte",
        price: 3000
    },
    {
        id: 5,
        name: "Espresso",
        price: 4000
    },
]

export const infusiones = [
    {
        id: 1,
        name: "Té Verde",
        price: 2000
    },
    {
        id: 2,
        name: "Té de Manzanilla",
        price: 2500
    },
    {
        id: 3,
        name: "Té de Menta",
        price: 2500
    },
    {  
        id: 4,
        name: "Té de Frutas",
        price: 3000
    },
    {
        id: 5,
        name: "Té de Hierbas",
        price: 3000
    },
]

export const Jugos = [
    {
        id: 1,
        name: "Jugo de Naranja",
        price: 4000
    },
    {
        id: 2,
        name: "Licuado de Frutilla",
        price: 4000
    },
    {
        id: 3,
        name: "Limonada",
        price: 5000
    },
    {
        id: 4,
        name: "Licuado de Banana",
        price: 3500
    },
]

export const sanguchitos = [
    {
        id: 1,
        name: "Sanguchito de Miga",
        price: 3000
    },
    {
        id: 2,
        name: "Sanguchito de J&Q",
        price: 2500
    },
    {
        id: 3,
        name: "Iberico",
        price: 5000
    },
]

export const facturas = [
    {
        id: 1,
        name: "Medialuna",
        price: 1200
    },
    {
        id: 2,
        name: "Cañoncito",
        price: 1500
    },
    {
        id: 3,
        name: "Vigilante",
        price: 2000
    },
    {
        id: 4,
        name: "Bola de Fraile",
        price: 1500
    },
    {
        id: 5,
        name: "Torta Negra",
        price: 1400
    },
    {
        id: 6,
        name: "Factura de dulce de leche",
        price: 2000
    },
]

export const saludable = [
    {
        id: 1,
        name: "Yogur con Frutas",
        price: 4000
    },
    {
        id: 2,
        name: "Ensalada de Frutas",
        price: 2000
    },
    {
        id: 3,
        name: "Pancakes de Avena",
        price: 3000
    },
]

export const combos = [
    {
        id: 1,
        name: "Combo Desayuno",
        items: ["Café con Leche", "Medialuna"],
        price: 2000
    },
    {
        id: 2,
        name: "Combo Saludable",
        items: ["Jugo de Naranja", "Pancakes de Avena"],
        price: 3000
    },
]

export const menus = [
    { id: 1, name: "Tortas", icon: "🍰", items: tortas, bgColor: "linear-gradient(135deg,#FF9BB8 0%,#FFC58A 100%)" },
    { id: 2, name: "Café", icon: "☕", items: cafe, bgColor: "linear-gradient(135deg,#503737 0%,#B07A34 100%)" },
    { id: 3, name: "Infusiones", icon: "🍵", items: infusiones, bgColor: "linear-gradient(135deg,#9ECDA9 0%,#6FA57E 100%)" },
    { id: 4, name: "Jugos", icon: "🥤", items: Jugos, bgColor: "linear-gradient(135deg,#FFB870 0%,#FF8967 100%)" },
    { id: 5, name: "Sanguchitos", icon: "🥪", items: sanguchitos, bgColor: "linear-gradient(135deg,#F4E06A 0%,#E6B84A 100%)" },
    { id: 6, name: "Facturas", icon: "🥐", items: facturas, bgColor: "linear-gradient(135deg,#FFD8B3 0%,#FFC089 100%)" },
    { id: 7, name: "Saludable", icon: "🍓", items: saludable, bgColor: "linear-gradient(135deg,#B9E6E1 0%,#7FCBC0 100%)" },
    { id: 8, name: "Combos", icon: "🍳", items: combos, bgColor: "linear-gradient(135deg,#82C5EE 0%,#2F9FDB 100%)" }
]
