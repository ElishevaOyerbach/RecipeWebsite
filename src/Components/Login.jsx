import { useState } from 'react'
import '../Css/CssLogin.css'
import { saveUser } from '../Store/UserSlice'
import { useSelector, useDispatch } from "react-redux"
//login button
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//form hook
import { Controller, useForm } from "react-hook-form";



const Login = () => {

  const User = useSelector(u => u.UserSlice)
  const dispatch = useDispatch();

  const { control, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = (data) => {
    const userData = {
      name: data.firstName,
      email: data.email,
    };
    dispatch(saveUser(userData));
  };

  return (
    <div className='Login'>
      <div className="leftLogin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <br />
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{
              required: "First name is required",
              maxLength: { value: 20, message: "First name cannot exceed 20 characters" },
              minLength: { value: 3, message: "First name must be at least 3 characters" }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
                sx={{
                  width: '30%',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(71, 8, 59, 0.88)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(71, 8, 59, 0.88)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgba(71, 8, 59, 0.88)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: errors.firstName ? 'gray' : 'rgba(71, 8, 59, 0.88)',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'purple',
                  },
                }}
              />
            )}
          />

          <br />
          <br />
          <br />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                multiline
                maxRows={4}
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                sx={{
                  width: '30%',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(71, 8, 59, 0.88)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(71, 8, 59, 0.88)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgba(71, 8, 59, 0.88)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: errors.email ? 'gray' : 'rgba(71, 8, 59, 0.88)',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'gray',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'purple',
                  },
                }}
              />
            )}
          />
          <br />
          <br />
          <br />
          <Button type="submit" style={{ textDecoration: 'none', color: 'white', backgroundColor: 'rgba(71, 8, 59, 0.88)' }} variant="text">
            LOGIN
          </Button>
        </form>


      </div>
      <div class="rightLogin">

      </div>
    </div>
  )
}
export default Login