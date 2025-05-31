import { useState } from 'react'
import '../Css/CssLogin.css'
import { saveUser } from '../Store/UserSlice'
import { useSelector,useDispatch } from "react-redux"
//login button
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login =()=>{

    const User = useSelector(u=>u.UserSlice)
    const dispatch = useDispatch()
    const [nameUser,setNameUser] = useState("")
    const [emailUser, setEmailUser]= useState("")

    function inputName(event){
        setNameUser(event.target.value)
    }
    function inputEmail(event){
        setEmailUser(event.target.value)
    }
    function save(){
        if(nameUser!="")
        dispatch(saveUser({name:nameUser,email:emailUser}))
    }
    return(
        <div className='Login'>
        <br/>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
    <TextField id="standard-basic" label="enter name" variant="standard" onChange={inputName} />
    </Box><br/>

    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
    <TextField id="standard-basic" label="enter email" variant="standard" onChange={inputEmail} />
    </Box>
    
        <button onClick={save}>save</button>
        
        </div>
    )
}
export default Login