import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

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
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <nav>
                    <NavLink to="/core/preview-courses">Courses Page</NavLink>
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default Header;