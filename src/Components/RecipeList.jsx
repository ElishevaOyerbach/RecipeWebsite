import { Link } from 'react-router-dom'
import React from 'react';
import { useSelector } from "react-redux"
//images
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
//button add recipe
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




const RecipeList = () => {
  const Recipes = useSelector(r => r.RecipeSlice)
  return (

    <div>

      {/* להוספת מתכון */}
      <Stack spacing={2} direction="row" style={{ display: "flex", flexDirection: "column", marginTop: "2vh" }}>
        <Link to={`/RecipeList/AddRecipe`}>
          <Button style={{ textDecoration: 'none', color: "gray" }} variant="text">
            To Add Recipe
          </Button>
        </Link>
      </Stack>
      {/* להצגת מועדפים */}
      <Stack spacing={2} direction="row" style={{ display: "flex", flexDirection: "column", marginTop: "2vh" }}>
        <Link to={`/RecipeList/FavoriteRecipe`}>
          <Button style={{ textDecoration: 'none', color: "gray" }} variant="text">
            favorite list
          </Button>
        </Link>
      </Stack>
      <br />
      <br />
      {/* רשימת מתכונים */}
      <ImageList sx={{ width: "80%", height: "90vh", marginRight: "10%" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>
        {Recipes.map((item) => (
          <ImageListItem key={item.img}>
            <Link to={`/RecipeList/${item.id}`}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.name}
                loading="lazy"
                style={{ display: 'block', width: '100%', height: '100%' }}
              /></Link>
            <ImageListItemBar
              title={item.name}
              subtitle={"preparation time: " + item.preparation_time}

              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.category}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}
export default RecipeList