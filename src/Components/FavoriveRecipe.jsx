import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//list favorite
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
const FavoriteRecipe = () => {
    const Recipes = useSelector(r => r.RecipeSlice)

    return (

        <div>
            <ImageList sx={{ width: "80%", height: "90vh", marginRight: "10%" }}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div"></ListSubheader>
                </ImageListItem>
                {Recipes.filter(item => item.is_favorite === "true").map((item) => (
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
export default FavoriteRecipe