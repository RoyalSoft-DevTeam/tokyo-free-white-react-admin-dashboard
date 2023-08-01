import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem
} from '@mui/material';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const ListWrapper = styled(Box)(
);

function HeaderMenu() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <ListWrapper
      >
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/components/my-offer"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="My Offer"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/components/offer-history"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Offer History"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/components/active-buyer-agent"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Active Buyer's Agent"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/components/active-showing-agents"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Active Showing Agents"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/components/buyers"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Buyers"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/components/sellers"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Sellers"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/components/faq"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="FAQ"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/components/contact-us"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Contact Us"
            />
          </ListItem>
        </List>
      </ListWrapper>
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/overview">
          Overview
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/tabs">
          Tabs
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/cards">
          Cards
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/modals">
          Modals
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
