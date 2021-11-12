import React, { useState } from "react";
import "./styles.css";
import logoVice from "../../assets/imgs/vicegaming.png";
import {
  Button,
  Input,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import SnackBar from "../../components/SnackBar";
import validator from "validator";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function CreateUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  let [snackbarInfo, setSnackbarInfo] = useState({
    message: "",
    severity: "error",
    canOpenModal: false,
    open: false,
    duration: 2000,
  });

  const user = { name, email, password };
  const history = useHistory();

  function routeChange(path) {
    history.push(path);
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const validateEmail = (value) => {
    if (!validator.isEmail(value)) {
      setSnackbarInfo({
        message: "Email inválido!",
        severity: "error",
        open: true,
      });
    } else {
      setSnackbarInfo({
        message: "Email válido!",
        severity: "success",
        open: true,
        duration: 1000,
      });
    }
  };

  const validateStrongPassword = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setSnackbarInfo({
        message: "Senha segura!",
        severity: "success",
        open: true,
      });
    } else {
      setSnackbarInfo({
        message:
          "Senhas deve conter no mínimo 8 caracteres. Coloque no mínimo 1 letra maiúscula, 1 caracter especial e 1 número!",
        severity: "error",
        open: true,
        duration: 8000,
      });
    }
  };

  const handleClick = async () => {
    if (password !== confirmPassword) {
      setSnackbarInfo({
        message: "Senhas não conferem!",
        severity: "error",
        open: true,
      });
    } else {
      await api
        .post("users/", user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });

      return routeChange("/");
    }
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

  return (
    <>
      <div className="header">
        <img src={logoVice} alt="logoViceGaming" width="210px" height="120px" />
      </div>
      <div className="create-user-form">
        <div className="container-create-user">
          <div className="inputs-create-user">
            <Input
              type="text"
              className="name-user"
              placeholder="Nome de Usuário"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              className="email-user"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value) || validateEmail(e.target.value)
              }
            />
            <TextField
              type={passwordShown ? "text" : "password"}
              className="password-user"
              placeholder="Senha"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value) ||
                validateStrongPassword(e.target.value)
              }
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
            <TextField
              type={passwordShown ? "text" : "password"}
              className="confirmPasswordUser"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          <div>
            <SnackBar
              open={snackbarInfo.open}
              close={handleClose}
              message={snackbarInfo.message}
              severity={snackbarInfo.severity}
            />
          </div>
          <Button
            className="button-confirm"
            type="submit"
            onClick={async () => handleClick()}
          >
            Criar Conta
          </Button>
        </div>
      </div>
    </>
  );
}
