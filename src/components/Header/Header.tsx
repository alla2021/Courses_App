import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import Button from '@mui/material/Button';

type HeaderProps = {
    title: string,
}
const Header = ({title}: HeaderProps) => {
    return(
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ display:'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </NavLink>
                <NavLink to="/core/preview-courses">
                    <Button variant="contained">Courses Page</Button>
                </NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Header;