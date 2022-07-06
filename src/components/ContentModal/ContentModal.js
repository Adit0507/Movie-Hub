import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core/Modal";
import { Backdrop } from "@material-ui/core";
import Fade from "@material-ui/core";
import axios from "axios";
import { img_500, unavailable, unavailableLandscape } from "../../config";
import "./ContentModal.css";
import { Button } from "@material-ui/core";
import { YouTube } from "@material-ui/icons";
import Carousel from "../Carousel/Carousel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows,
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function TransitionModal({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () =>{
    setOpen(true);
  };

  const handleClose = () =>{
    
  }

}
