import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { addRecipe } from "../Store/RecipeSlice"
import { useDispatch, useSelector } from 'react-redux';


function AddRecipe() {

    const Recipes = useSelector(r => r.RecipeSlice)
    const dispatch = useDispatch()

  const [recipe, setRecipe] = useState({
    id:`${Recipes.length+1}`,
    name: '',
    preparation_time: '',
    ingredients: [""],
    category: '',
    is_favorite: "false",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault() 
     setRecipe({
        ...recipe,
        id:`${recipe.id}`,
        name:recipe.name,
        preparation_time: parseInt(recipe.preparationTime, 10),
        ingredients: recipe.ingredients.split(','), 
        category: recipe.category,
        is_favorite: "false",
     })

    console.log('New Recipe:', recipe);
    dispatch(addRecipe(recipe));
    setRecipe({
        id: `${Recipes.length + 1}`,
        name: '',
        preparation_time: '',
        ingredients: [""],
        category: '',
        is_favorite: "false",
      });
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: '0 auto',
        marginTop:'10vh',
        padding: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
      }}
    >
      <h2>Add a New Recipe</h2>

      <TextField
        label="Recipe Name"
        name="name"
        value={recipe.name}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Preparation Time (minutes)"
        name="preparation_time"
        type="number"
        value={recipe.preparation_time}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Ingredients (comma-separated)"
        name="ingredients"
        value={recipe.ingredients}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Category"
        name="category"
        value={recipe.category}
        onChange={handleChange}
        fullWidth
        required
      />

      <Button style={{backgroundColor:'red'}} onClick={handleSubmit} type="submit" variant="contained" color="primary">
        Add Recipe
      </Button>
    </Box>
  );
}

export default AddRecipe;
