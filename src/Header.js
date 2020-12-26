import { Button, Input, makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { auth } from "./firebase";
import "./Header.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Header = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));

    setOpen(false);
  };
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) =>
        alert(
          err.message,
          "PLEASE MAKE A NEW ACCOUNT OR CHECK YOUR EMAIL OR PASSWORD!"
        )
      );
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const signout = () => {
    auth.signOut();
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <center>
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png"
          alt=""
          className="img-img"
        />
        <div className="iinput">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btns">
            <Button onClick={login}>Login</Button>
            <Button onClick={signup}>SignUp</Button>
          </div>
        </div>
      </center>
    </div>
  );
  return (
    <div className="header">
      <form className="form">
        <center>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </center>
      </form>
      <div className="header-input">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglu3ChzAfX5yRvHOv81wjfBcxIsJiEMfD1g&usqp=CAU"
          alt=""
          className="header-logo"
        />
        <div className="header-center">
          <input
            type="text"
            className="input"
            placeholder="Search for products, brands and more "
          />
          <div class="button">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
      <div className="header-options">
        <button className="btn" onClick={handleOpen}>
          Login
        </button>
        {/* <SimpleModal /> */}
        <a href="https://justinnn07.netlify.app/">Home</a>
        <a href="/">More</a>
        <a href="/">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
