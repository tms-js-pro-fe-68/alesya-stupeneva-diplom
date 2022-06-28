import{ useNavigate} from 'react-router-dom'
import { useFormik} from 'formik'
import { object, string} from 'yup'
import {TextField, Button, Paper, Box, Typography} from '@mui/material'
import Page from '../components/Page'


const signInSchema = object().shape({
  email: string().required(),
  password: string().min(2).required(),

});

export default function LoginPage() {

const navigate = useNavigate();

  const handleSubmit = async(values, {setSubmitting}) => {
    const { email, password} = values;

    const response = await fetch('https://tms-js-pro-back-end.herokuapp.com/api/users/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password,  }),
    },
    );

    const data = await response.json();
    
    sessionStorage.token = data.token;
    sessionStorage.email = data.email;
    navigate('/dances', {replace: true });
    setSubmitting(false);
  };
  
  const formik = useFormik({
    initialValues: {
    email: '',
    password: '',
  },
  onSubmit: handleSubmit,
  validationSchema: signInSchema,
  validateOnMount: true,
});

// console.log(formik);

  return (
  <Page className='justify-center items-center'>
   <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
   >
    <Paper 
      component='form' 
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 1,
        padding: 2,
      }}
      elevation={4}
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h5">Please sign in</Typography>
      <TextField 
      label='Email address'
      id='email'
      type="email"
      name="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
      error={formik.touched.email && !!formik.errors.email && formik.errors.email}
      helperText={formik.touched.email && !!formik.errors.email && formik.errors.email}
    />
      <TextField 
      label='Password'
      id='password'
      type="password"
      name="password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password}
      error={formik.touched.password && !!formik.errors.password && formik.errors.password}
      helperText={formik.touched.email && !!formik.errors.email && formik.errors.email}
      />

      <Button 
      type="submit" 
      variant='contained'
      color='error'
      disabled={!formik.isValid && !formik.isSubmitting}>
        sign in
        </Button>
        </Paper>
     </Box>
     </Page> 
  );
}