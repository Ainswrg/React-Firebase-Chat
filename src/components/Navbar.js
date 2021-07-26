import React, { useContext } from 'react';
import { AppBar, Toolbar, Grid, Button} from '@material-ui/core';
import { LOGIN_ROUTE } from './utils/consts';
import {NavLink} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';

const Navbar = () => {
  const {auth}= useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <AppBar color={"secondary"} position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {user ?
            <Button onClick={() => auth.signOut()} variant={"outlined"} color="primary">Logout</Button>
            :
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"} color="primary" >Login</Button>
            </NavLink>
        }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
