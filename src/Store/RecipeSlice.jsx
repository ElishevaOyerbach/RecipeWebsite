import { createSlice } from '@reduxjs/toolkit'
import cake from '../images/cake.jpg';
import soup from '../images/soup.jpg';

import salt from '../images/salt.jpg';
import falafel from '../images/falafel.jpg'
import pizza from '../images/pizza.jpg'
import fruitsald from '../images/fruitsald.png'
import chese from '../images/chese.jpg'
import sushi from '../images/sushi.jpg'
import shaksuka from '../images/shaksuka.jpg'
import hummus from '../images/hummus.jpg'
import greek from '../images/greek.jpg'
import spianch from '../images/spianch.jpg'
import potato from '../images/potato.jpg'
import vegtablest from '../images/vegtablest.jpg'
import roasted from '../images/roasted.jpg'
import chesecake from '../images/chesecake.png'
import vegtablrq from '../images/vegtableQui.jpg'
import fishcus from '../images/fishcus.jpg'
import MushroomRisotto from '../images/Mushroom Risotto.jpg'
import LentilStew from '../images/Lentil Stew.jpg'
import PastaAlfredo from '../images/Pasta Alfredo.jpg'
import StuffedPeppers from '../images/Stuffed Peppers.jpg'
import TomatoPasta from '../images/Tomato Pasta.jpg'
import BananaSmoothie from '../images/Banana Smoothie.jpg'
import ApplePie from '../images/ApplePie.jpg'





const initialValue = [
  {
    id: 1,
    name: "Greek Salad",
    preparation_time: 15,
    ingredients: ["Tomatoes", "Cucumber", "Red onion", "Feta cheese", "Olives", "Olive oil", "Oregano"],
    category: "milky",
    is_favorite: "false",
    img: greek,
  },
  {
    id: 2,
    name: "Hummus",
    preparation_time: 15,
    ingredients: ["Chickpeas", "Tahini", "Lemon juice", "Garlic", "Olive oil", "Salt"],
    category: "parve",
    is_favorite: "false",
    img: hummus,
  },
  {
    id: 3,
    name: "Spinach Pie",
    preparation_time: 50,
    ingredients: ["Spinach", "Feta cheese", "Phyllo dough", "Eggs", "Onion", "Salt", "Pepper"],
    category: "milky",
    is_favorite: "false",
    img: spianch,
  },
  {
    id: 4,
    name: "Sweet Potato Fries",
    preparation_time: 35,
    ingredients: ["Sweet potatoes", "Olive oil", "Salt", "Pepper", "Paprika"],
    category: "parve",
    is_favorite: "false",
    img: potato,
  },

  {
    id: 5,
    name: "Shakshuka",
    preparation_time: 20,
    ingredients: ["Eggs", "Tomatoes", "Onion", "Garlic", "Red pepper", "Paprika", "Cumin"],
    category: "parve",
    is_favorite: "false",
    img: shaksuka,
  },
  {
    id: 6,
    name: "Vegetarian Sushi",
    preparation_time: 50,
    ingredients: ["Sushi rice", "Nori sheets", "Cucumber", "Carrot", "Avocado", "Soy sauce", "Rice vinegar"],
    category: "parve",
    is_favorite: "false",
    img: sushi,
  },
  {
    id: 7,
    name: "Mushroom Risotto",
    preparation_time: 45,
    ingredients: ["Arborio rice", "Mushrooms", "Onion", "Garlic", "Vegetable broth", "White wine", "Butter", "Parmesan cheese"],
    category: "milky",
    is_favorite: "false",
    img: MushroomRisotto,
  },
  {
    id: 8,
    name: "Falafel",
    preparation_time: 30,
    ingredients: ["Chickpeas", "Onion", "Garlic", "Parsley", "Cumin", "Coriander", "Salt"],
    category: "parve",
    is_favorite: "false",
    img: falafel,
  },
  {
    id: 9,
    name: "Cheese Omelette",
    preparation_time: 10,
    ingredients: ["Eggs", "Cheese", "Milk", "Salt", "Pepper"],
    category: "milky",
    is_favorite: "false",
    img: chese,
  },
  {
    id: 10,
    name: "Lentil Stew",
    preparation_time: 60,
    ingredients: ["Lentils", "Carrots", "Onions", "Garlic", "Tomatoes", "Vegetable broth", "Cumin", "Paprika"],
    category: "parve",
    is_favorite: "false",
    img: LentilStew,
  },
  {
    id: 11,
    name: "Chocolate Cake",
    preparation_time: 60,
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Baking powder", "Milk", "Butter", "Vanilla extract"],
    category: "milky",
    is_favorite: "false",
    img: cake,
  },
  {
    id: 12,
    name: "Vegetable Soup",
    preparation_time: 40,
    ingredients: ["Carrots", "Celery", "Potatoes", "Vegetable broth", "Parsley", "Salt", "Pepper"],
    category: "parve",
    is_favorite: "false",
    img: soup,
  },
  {
    id: 13,
    name: "Pasta Alfredo",
    preparation_time: 30,
    ingredients: ["Pasta", "Heavy cream", "Butter", "Parmesan cheese", "Garlic", "Salt", "Pepper"],
    category: "milky",
    is_favorite: "false",
    img: PastaAlfredo,
  },
  {
    id: 14,
    name: "Quinoa Salad",
    preparation_time: 25,
    ingredients: ["Quinoa", "Cherry tomatoes", "Cucumber", "Red onion", "Olive oil"],
    category: "parve",
    is_favorite: "false",
    img: salt,
  },
  {
    id: 15,
    name: "Fruit Salad",
    preparation_time: 10,
    ingredients: ["Apple", "Banana", "Orange", "Grapes", "Strawberries", "Mint", "Honey"],
    category: "parve",
    is_favorite: "false",
    img: fruitsald,
  },
  {
    id: 16,
    name: "Vegetable Stir-Fry",
    preparation_time: 20,
    ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce", "Garlic", "Ginger"],
    category: "parve",
    is_favorite: "false",
    img: vegtablest,
  },
  {
    id: 17,
    name: "Cheesecake",
    preparation_time: 90,
    ingredients: ["Cream cheese", "Sugar", "Eggs", "Vanilla extract", "Butter", "Graham crackers"],
    category: "milky",
    is_favorite: "false",
    img: chesecake,
  },
  {
    id: 18,
    name: "Roasted Vegetables",
    preparation_time: 40,
    ingredients: ["Zucchini", "Bell peppers", "Eggplant", "Onion", "Olive oil", "Salt", "Pepper"],
    category: "parve",
    is_favorite: "false",
    img: roasted,
  },
  {
    id: 19,
    name: "Banana Smoothie",
    preparation_time: 5,
    ingredients: ["Banana", "Milk", "Honey", "Ice cubes"],
    category: "milky",
    is_favorite: "false",
    img: BananaSmoothie,
  },
  {
    id: 20,
    name: "Couscous Salad",
    preparation_time: 20,
    ingredients: ["Couscous", "Cucumber", "Tomatoes", "Mint", "Parsley", "Olive oil", "Lemon juice"],
    category: "parve",
    is_favorite: "false",
    img: fishcus,
  },
  {
    id: 21,
    name: "Vegetable Quiche",
    preparation_time: 50,
    ingredients: ["Eggs", "Milk", "Cheese", "Broccoli", "Onions", "Pie crust", "Salt", "Pepper"],
    category: "milky",
    is_favorite: "false",
    img: vegtablrq,
  },
  {
    id: 22,
    name: "Stuffed Peppers",
    preparation_time: 60,
    ingredients: ["Bell peppers", "Rice", "Tomatoes", "Onion", "Garlic", "Olive oil"],
    category: "parve",
    is_favorite: "false",
    img: StuffedPeppers,
  },
  {
    id: 23,
    name: "Tomato Pasta",
    preparation_time: 25,
    ingredients: ["Pasta", "Tomato sauce", "Garlic", "Olive oil", "Basil"],
    category: "parve",
    is_favorite: "false",
    img: TomatoPasta,
  },
  {
    id: 24,
    name: "Vegetable Pizza",
    preparation_time: 45,
    ingredients: ["Pizza dough", "Tomato sauce", "Cheese", "Bell peppers", "Mushrooms"],
    category: "milky",
    is_favorite: "false",
    img: pizza,
  },
  {
    id: 25,
    name: "Apple Pie",
    preparation_time: 75,
    ingredients: ["Apples", "Sugar", "Cinnamon", "Pie crust", "Butter"],
    category: "milky",
    is_favorite: "false",
    img: ApplePie,
  }
];

const RecipeSlice = createSlice({
  name: "Recipe",
  initialState: initialValue,
  reducers: {
    updateFavorite: (state, action) => {
      state[action.payload].is_favorite = "true";
    },
    addRecipe: (state, action) => {
      state.push(action.payload)
    }
  }


})
export const { updateFavorite, addRecipe } = RecipeSlice.actions
export default RecipeSlice.reducer