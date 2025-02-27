import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
//images
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import '../Css/CssLogin.css'
//button add recipe
import Stack from '@mui/material/Stack';

const RecipeList = () => {
  const Recipes = useSelector(r => r.RecipeSlice)
  return (

    <div>

      {/* להוספת מתכון */}
      <div className='buttonall'>
        <div className='title'>
          <p><strong>Recipes</strong></p></div>
        <div className='buttomtop'>
          <Stack spacing={2} direction="row" style={{ display: "flex", flexDirection: "column", marginTop: "2vh" }}>
            <Link to={`/RecipeList/AddRecipe`}>
              <Button style={{ textDecoration: 'none', color: "white", backgroundColor: 'rgba(71, 8, 59, 0.88)' }} variant="text">
                To Add Recipe
              </Button>
            </Link>
          </Stack>
          {/* להצגת מועדפים */}
          <Stack spacing={2} direction="row" style={{ display: "flex", flexDirection: "column", marginTop: "2vh" }}>
            <Link to={`/RecipeList/FavoriteRecipe`}>
              <Button style={{ textDecoration: 'none', color: "white", backgroundColor: 'rgba(71, 8, 59, 0.88)' }} variant="text">
                favorite list
              </Button>
            </Link>
          </Stack></div></div>
      <br />
      <br />
      {/* רשימת מתכונים */}
      <div class="allRecipe">
        {Recipes.map((item) => (
          <div class="recipe">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={`${item.img}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='rgba(71, 8, 59, 0.88)' >
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  time prepering: <strong>{item.preparation_time}</strong>

                  <br />
                  category: <strong>{item.category}</strong>
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/RecipeList/${item.id}`}>
                  <Button style={{ backgroundColor: 'rgba(71, 8, 59, 0.88)', color: "white" }} size="small">show More</Button>

                </Link>
                <div class="icon">
                  <FoodBankOutlinedIcon /></div>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RecipeList