import { Button, Input, Avatar, makeStyles, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { auth, provider } from "./firebase";
import "./Header.css";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

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
  const googlee = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
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
  };
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((auth) => {
      console.log(auth);
    });
  }, []);

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
          <div className="google">
            <i class="fab fa-google" onClick={googlee}></i>
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
          src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
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
        <button onClick={signout} className="btn">
          Signout
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
