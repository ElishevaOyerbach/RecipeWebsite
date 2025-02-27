import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//list favorite
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import '../Css/CssLogin.css'
const FavoriteRecipe = () => {
    const Recipes = useSelector(r => r.RecipeSlice)

    return (

        <div>
            <div className='title2'>
                <p><strong>Favorites</strong></p>
            </div>
            <div class="allRecipe">
                {Recipes.filter(item => item.is_favorite === "true").map((item) => (
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
export default FavoriteRecipe