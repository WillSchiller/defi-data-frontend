import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



export default function Navbar() {


  return (
          <div class="navbar">
        <div class= "logo">
        <a href="/">
        <img
        src="/defi_data_logo.png"
        alt="defi data logo"
        width={100}
        height={56.2}
      />
      </a>
        </div>


        <div class="buttons">
            <Button color="inherit">about</Button> 
            <p>|</p>
            <Button color="inherit">contact</Button>
            
        </div>
 
    </div>


    
  );
}