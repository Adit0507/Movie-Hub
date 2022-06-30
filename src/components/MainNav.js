import React, {useEffect} from "react";
import { makeStyles } from "@mui/material";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie"
import SearchIcon from "@mui/icons-material/Search"
import TVIcon from "@mui/icons-material/Tv"
import {useNavigate} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
       if(value === 0){
        navigate.push("/");
       } 
       else if (value === 1) {
        navigate.push("/movies");
      } else if (value === 2) {
        navigate.push("/series");
      } else if (value === 3) {
        navigate.push("/search");
      }

  }, [value, navigate])
  

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
          style={{ color: "black" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="TV Series"
          icon={<TVIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
