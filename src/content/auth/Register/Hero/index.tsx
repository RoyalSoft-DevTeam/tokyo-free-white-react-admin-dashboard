import { Stack, Box, Button, Container, Grid, Typography, TextField, Select, MenuItem, Checkbox } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { Link, Link as RouterLink } from 'react-router-dom';

import { SnackbarProvider, enqueueSnackbar } from 'notistack'

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { alignProperty } from '@mui/material/styles/cssUtils';

import HttpApiService from '../../../../actions/http-api-service';

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

  const [profile, setProfile] = useState({
    type: '',
    firstName: '',
    middleName: '',
    lastName: '',
    cell: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
    
    if(profile.password == profile.confirmPassword) { 
      return;
    }
  };
  
  const onClick = e => {
    e.preventDefault();

    if (isEmpty(profile.type)) {
      enqueueSnackbar('Please fill the type.')
      return;
    }
    if (isEmpty(profile.firstName)) {
      enqueueSnackbar('Please fill the firstName.')
      return;
    }
    if (isEmpty(profile.lastName)) {
      enqueueSnackbar('Please fill the lastName.')
      return;
    }
    if (!isEmail(profile.email)) {
      enqueueSnackbar('Please enter the valid email.')
      return;
    }
    if (isEmpty(profile.email)) {
      enqueueSnackbar('Please fill the email.')
      return;
    }
    if (isEmpty(profile.cell)) {
      enqueueSnackbar('Please fill the cell.')
      return;
    }
    if (isEmpty(profile.password)) {
      enqueueSnackbar('Please fill the password.')
      return;
    }
    if (profile.password.length < 6) {
      enqueueSnackbar('Password must be longer than 6 characters.')
      return;
    }
    if (profile.password !== profile.confirmPassword) {
      enqueueSnackbar('Please enter the correct password.')
      return;
    }

    httpApiService.signUp(profile);
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
            Sign Up
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Please sign up using your information
          </TypographyH2>

          <TypographyH2
              sx={{ lineHeight: 1.5, pb: 1.5 }}
              variant="h4"
              textAlign={'left'}
              color="text.secondary"
              fontWeight="normal"
            >
              Type
          </TypographyH2>
          <Stack>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={profile.type}
              name='type'
              label="*Type"
              onChange={onChange}
            >
              <MenuItem value={'agent'}>Agent</MenuItem>
              <MenuItem value={'buyer'}>Buyer</MenuItem>
              <MenuItem value={'seller'}>Seller</MenuItem>
            </Select><br />
          </Stack>
          
          <TypographyH2
              sx={{ lineHeight: 1.5, pb: 1.5 }}
              variant="h4"
              textAlign={'left'}
              color="text.secondary"
              fontWeight="normal"
            >
              Personal Information
          </TypographyH2>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <TextField name="firstName" label="*First Name" value={profile.firstName} variant="outlined" style={{width: '200px'}} onChange={onChange} />
            <TextField name="middleName" label="Middle Name" value={profile.middleName} variant="outlined" style={{width: '200px'}} onChange={onChange} />
            <TextField name="lastName" label="*Last Name" value={profile.lastName} variant="outlined" style={{width: '200px'}} onChange={onChange} />
          </div><br />

          <TypographyH2
              sx={{ lineHeight: 1.5, pb: 1.5 }}
              variant="h4"
              textAlign={'left'}
              color="text.secondary"
              fontWeight="normal"
            >
              Contact Information
          </TypographyH2>
          <Stack>
              <TextField label="*Cell" name='cell' value={profile.cell} type='number' variant="outlined" onChange={onChange} /><br />
              <TextField label="*Email" name='email' value={profile.email} type='email' variant="outlined" onChange={onChange} /><br />
          </Stack>
          
          <TypographyH2
              sx={{ lineHeight: 1.5, pb: 1.5 }}
              variant="h4"
              textAlign={'left'}
              color="text.secondary"
              fontWeight="normal"
            >
              Account Information
          </TypographyH2>
          <Stack>
            <TextField label="*Password" name='password' value={profile.password} type='password' variant="outlined" onChange={onChange} /><br />
            <TextField label="*Confirm Password" name='confirmPassword' value={profile.confirmPassword} type='password' variant="outlined" onChange={onChange} />
          </Stack><br />

          <div style={{display: 'flex', justifyContent: "left"}}>
            <Checkbox aria-label='Checkbox demo' />
            <TypographyH2
                sx={{ lineHeight: 1.5, pb: 1.5 }}
                variant="h4"
                textAlign={'left'}
                color="text.secondary"
                fontWeight="normal"
              >
                Yes, I understand and agree to the Terms of Service and Privacy Policy.
            </TypographyH2>
          </div><br />

          <SnackbarProvider />
          <Button
            size="large"
            variant="contained"
            onClick={onClick}
          >
            Sign Up
          </Button>

          <Link to={'/user/sign-in'}>
            <Button
              sx={{ ml: 2 }}
              component="a"
              target="_blank"
              rel="noopener"
              size="large"
              variant="text"
            >
              Sign In
            </Button>
          </Link>
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
