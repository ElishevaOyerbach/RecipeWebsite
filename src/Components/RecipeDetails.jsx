import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { updateFavorite } from "../Store/RecipeSlice"
import '../Css/CssLogin.css'
////////////favorite
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
//list ingredients
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';




const RecipeDetails = () => {
    const Recipes = useSelector(r => r.RecipeSlice)
    const { id } = useParams();
    const [recipeById, setRecipeById] = useState(null)
    const dispatch = useDispatch()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    useEffect(() => {
        setRecipeById(Recipes[id - 1])
    }, [id])


    //הצגת הרכיבים
    function CheckboxList() {
        const [checked, setChecked] = useState([0]);

        const handleToggle = (value) => () => {
            const currentIndex = checked.indexOf(value);
            const newChecked = [...checked];

            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setChecked(newChecked);
        };

        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {recipeById.ingredients.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.includes(value)}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`${value}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        );
    }


    return (
        <div className="RecipeDetails">
            {recipeById ? (
                <div className="DetailsRight">
                    <p>{recipeById.name}</p>
                    <div className="RecipeImage">
                        <img
                            src={recipeById.img}
                            alt={recipeById.name} 
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                    </div>
                </div>
            ) : (<>Error</>)}

            <div className="DetailsLeft">
                {/* לסימון אם מועדף */}
                <div className="favorite">
                    <Checkbox style={{ color: 'rgb(185, 107, 150)' }} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={() => dispatch(updateFavorite(id - 1))} />
                </div>
                <div className="CheckboxList">
                <span><strong>ingredients:</strong></span>
                    {recipeById ? (
                        <CheckboxList />
                    ) : (<>Error</>)}
                </div>
                {recipeById ? (
                    <p>
                        <br/><br/><br/>
                        <p>preparation_time: <strong>{recipeById.preparation_time}</strong></p>
                        <p>category: <strong>{recipeById.category}</strong></p>
                    </p>
                ) : (<>Error</>)}
            </div>
        </div>
    )
}
export default RecipeDetails