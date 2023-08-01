import { Stack, Box, Button, Container, Grid, Typography, TextField, Select, MenuItem, InputLabel, SelectChangeEvent } from '@mui/material';
  import SendIcon from '@mui/icons-material/Send';

import { Link as RouterLink } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { Label } from '@mui/icons-material';

import HttpApiService from '../../../../actions/http-api-service';

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
    tradeName: '',
    cell: '',
    email: '',
    brokerageAddress: '',
    brokerageCity: '',
    brokeragePostalCode: '',
    brokeragePhone: '',
    password: '',
    confirmPassword: '',
    picture: '',
    activeAreas: ''
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
          
          <Stack>
            <TextField name="tradeName" value={profile.tradeName} label="Trade Name" variant="outlined" onChange={onChange} /><br />
          </Stack>

          <TypographyH2
              sx={{ lineHeight: 1.5, pb: 1.5 }}
              variant="h4"
              textAlign={'left'}
              color="text.secondary"
              fontWeight="normal"
            >
              Contact Information
          </TypographyH2>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <TextField label="*Cell" name='cell' value={profile.cell} type='number' variant="outlined" style={{width: '450px'}} onChange={onChange} />
            <Button variant="contained" style={{width: '150px'}} endIcon={<SendIcon />}>
              Cell Verify
            </Button>
          </div><br />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <TextField label="*Email" name='email' value={profile.email} type='email' variant="outlined" style={{width: '450px'}} onChange={onChange} />
            <Button variant="contained" style={{width: '150px'}} endIcon={<SendIcon />}>
              Email Verify
            </Button>
          </div><br />

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
          </Stack>
          
          <Stack>
            <TypographyH2
              sx={{ lineHeight: 1.5, pb: 1.5 }}
              variant="h4"
              textAlign={'left'}
              color="text.secondary"
              fontWeight="normal"
            >
              Brokerage Information
            </TypographyH2>
            <TextField label="Brokerage Address" name='brokerageAddress' value={profile.brokerageAddress} variant="outlined" onChange={onChange} /><br />
            <TextField label="City" variant="outlined" name='brokerageCity' value={profile.brokerageCity} onChange={onChange} /><br />
            <TextField label="Postal Code" variant="outlined" name='brokeragePostalCode' value={profile.brokeragePostalCode} onChange={onChange} /><br />
            <TextField label="Phone" type='number' variant="outlined" name='brokeragePhone' value={profile.brokeragePhone} onChange={onChange} /><br />
          </Stack>

          <Stack>
            <TypographyH2
              sx={{ lineHeight: 1.5, pb: 1.5 }}
              variant="h4"
              textAlign={'left'}
              color="text.secondary"
              fontWeight="normal"
            >
              Picture Upload
            </TypographyH2>

            <Button variant="contained" style={{width: '150px'}}>
                Email Verify
            </Button>
          </Stack>

          <Stack>
            <TypographyH2
              sx={{ lineHeight: 1.5, pb: 1.5 }}
              variant="h4"
              textAlign={'left'}
              color="text.secondary"
              fontWeight="normal"
            >
              Picture Upload
            </TypographyH2>

            <Button variant="contained" style={{width: '150px'}}>
                Email Verify
            </Button>
          </Stack>

          <Button
            size="large"
            variant="contained"
            onClick={onClick}
          >
            Sign Up
          </Button>
          <Button
            sx={{ ml: 2 }}
            component="a"
            target="_blank"
            rel="noopener"
            href="https://bloomui.com/product/tokyo-free-white-react-typescript-material-ui-admin-dashboard"
            size="large"
            variant="text"
          >
            Sign In
          </Button>
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
