import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import BottomNavigation from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: '#2d313a',
        zIndex: 100,
    },
});

export default function SimpleBottomNavigation(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0)
}