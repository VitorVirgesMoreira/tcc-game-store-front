import React, { useContext, useState } from "react";
import "./styles.css";
import logoVice from "../../assets/imgs/vicegaming.png";
import {
  Button,
  Input,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import StoreContext from "../../components/Store/Context";
import SnackBar from "../../components/SnackBar";

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  let [snackbarInfo, setSnackbarInfo] = useState({
    message: "",
    severity: "error",
    canOpenModal: false,
    open: false,
    duration: 2000,
  });

  const history = useHistory();
  function routeChange(path) {
    history.push(path);
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarInfo({
      message: "",
      severity: "error",
      open: false,
    });
  };

  //login
  function initialState() {
    return { email: "", password: "" };
  }

  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);

  const login = ({ email, password }, response) => {
    if (
      email === response?.email &&
      password === response?.password
    ) {
      return {
        token: "NmhBPGaHBMFnKbVCmlEO1z6LXpgNFrGY37vBR6YELw6GS6aa6E5a6vWxGfLt",
      };
    }
    return setSnackbarInfo({
      message: "Email ou senha inválidos",
      severity: "error",
      open: true,
      duration: 5000,
    });
  };

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  const handleClick = async () => {
    const response = await api.get(`users/get-by-email/${values.email}`);
    console.log(response?.data);
    const token = login(values, response?.data);

    if (token) {
      setToken(token);
      routeChange("gamestore/home");
    }

    setValues(initialState);
  };

  return (
    <>
      <div className="header">
        <img src={logoVice} alt="logoViceGaming" width="210px" height="120px" />
      </div>
      <div className="login-user-form">
        <label> O lugar mais simples e seguro para comprar seus jogos !</label>
        <div className="container-login">
          <div className="labels-login">
            <label>Já tem seu acesso aqui?</label>
            <label>
              Se sim, se registre agora mesmo ou crie sua conta na VICE GAMING !
            </label>
          </div>
          <div className="inputs-login-user">
            <Input
              id="email"
              name="email"
              className="email-user"
              placeholder="Email"
              value={values.email}
              onChange={onChange}
            />
            <TextField
              id="password"
              name="password"
              type={passwordShown ? "text" : "password"}
              className="password-user"
              placeholder="Senha"
              value={values.password}
              onChange={onChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePassword}>
                      {passwordShown ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="buttons-login-user">
            <Button className="button-login" onClick={() => handleClick()}>
              Entrar
            </Button>
            <Button
              className="button-redirect"
              onClick={() => routeChange("/gamestore/users")}
            >
              Criar Conta
            </Button>
          </div>
          <div>
            <SnackBar
              open={snackbarInfo.open}
              close={handleClose}
              message={snackbarInfo.message}
              severity={snackbarInfo.severity}
            />
          </div>
        </div>
      </div>
    </>
  );
}
