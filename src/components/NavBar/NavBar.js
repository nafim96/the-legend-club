import React from 'react';
import {Link, CssBaseline, AppBar, Typography, Toolbar } from '@material-ui/core';

const NavBar = () => {
    return (
        <div>
            <CssBaseline></CssBaseline>
            <AppBar position='relative'>
                <Toolbar>
                    <Typography variant='a' >

                        <Typography>
                            <Link href="/home" color="inherit">
                                Home
                            </Link>
                        </Typography>

                        <Typography>
                            <Link href="/about" color="inherit">
                                About
                            </Link>
                        </Typography>

                        <Typography>
                            <Link href="/contact" color="inherit">
                                Contact Us
                            </Link>
                        </Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;