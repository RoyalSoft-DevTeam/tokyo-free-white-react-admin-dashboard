import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';

import { Link, Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import { SnackbarProvider, enqueueSnackbar } from 'notistack'

import React, {useState, useEffect} from 'react';

import HttpApiService from 'src/actions/http-api-service';

import isEmail from 'src/validation/is-email';
import isEmpty from 'src/validation/is-empty';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {
  const httpApiService = new HttpApiService();

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const onChange = e => {
    setUser({
      ...user, 
      [e.target.name]: e.target.value
    })
  }

  const onClick = e => {
    e.preventDefault();

    if (isEmpty(user.email)) {
      enqueueSnackbar('Please fill the email.')
      return;
    }
    if (!isEmail(user.email)) {
      enqueueSnackbar('Please fill valid email.')
      return;
    }
    if (isEmpty(user.password)) {
      enqueueSnackbar('Please fill the password.')
      return;
    }

    httpApiService.signIn(user);
  }

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Sign In
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Please sign in using your account
          </TypographyH2>

          <Stack>
              <TextField label="*Email" name='email' value={user.email} type='email' variant="outlined" onChange={onChange} /><br />
          </Stack>

          <Stack>
            <TextField label="*Password" name='password' value={user.password} type='password' variant="outlined" onChange={onChange} /><br />
          </Stack><br />

          <Button
            onClick={onClick}
            size="large"
            variant="contained"
          >
            Sign In
          </Button>

          <Link to={'/user/sign-up'}>
            <Button
              sx={{ ml: 2 }}
              component="a"
              target="_blank"
              rel="noopener"
              size="large"
              variant="text"
            >
              Sign up
            </Button>
          </Link>
          
          
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
