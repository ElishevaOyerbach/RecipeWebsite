import { Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react';
//navBar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux"
//כל הניתובים
const LazyHome = React.lazy(()=>import('./Home'))
const LazyRecipeList = React.lazy(()=>import('./RecipeList'))
const LazyLogin = React.lazy(()=>import('./Login'))
const LazyRecipeDetails = React.lazy(()=>import('./RecipeDetails'))
const LazyAddRecipe = React.lazy(()=>import('./AddRecipe'))
const LazyFavoriteRecipe = React.lazy(()=>import('./FavoriveRecipe'))
const Appbar = ()=>{

  
    function MyResponsiveAppBar() {
        const User = useSelector(u=>u.UserSlice)
          return (
              <AppBar position="sticky" sx={{ backgroundColor:'rgba(71, 8, 59, 0.88)' }}>
                  <Toolbar>
                        <p style={{marginRight:"7%"}}>{User.name}</p>
                      <Typography
                          variant="h6"
                          component="div"
                          sx={{ flexGrow: 1 }}     
                      >
                      </Typography>
                      <Box sx={{ display: 'flex', gap:10 , marginLeft:"2%"}}>
                          {pages.map((page) => (
                              <Button
                                  key={page.name}
                                  component={Link}
                                  to={page.path}
                                  sx={{ color: 'white' }}
                              >
                                  {page.name}
                              </Button>
                          ))}
                          
                      </Box>
                  </Toolbar>
              </AppBar>
          );
      }
const pages = [
    { name: 'RecipeList', path: '/RecipeList' },
    { name: 'Login', path: '/Login' },
    { name: 'Home', path: '/' }

];
    return (
        <div>
        <MyResponsiveAppBar/>
        <Routes>
             <Route path='/' element={<Suspense fallback={'loading...'}><LazyHome /></Suspense>} />
             <Route path = '/Login' element ={<Suspense fallback={'loading...'}><LazyLogin/></Suspense>}/>
             <Route path ='/RecipeList' element={<Suspense fallback={'loading...'}><LazyRecipeList/></Suspense>}/>
             <Route path='/RecipeList/:id' element={<Suspense fallback={'loading...'}><LazyRecipeDetails/></Suspense>}/>
             <Route path='/RecipeList/AddRecipe' element={<Suspense fallback={'loading...'}><LazyAddRecipe/></Suspense>}/>
             <Route path='/RecipeList/FavoriteRecipe' element={<Suspense fallback={'loading...'}><LazyFavoriteRecipe/></Suspense>}/>
        </Routes>
        </div>
    )

}
export default Appbar
