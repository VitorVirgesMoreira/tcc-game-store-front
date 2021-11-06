import React from "react";
import "./styles.css";
import logoVice from "../../assets/imgs/vicegaming.png";
import { Button, Input } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();

  function routeChange(path) {
    history.push(path)
  }

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
            <Input className="email-user" placeholder="Email" />
            <Input className="password-user" placeholder="Senha" />
          </div>
          <div className="buttons-login-user">
            <Button className="button-login"> Entrar </Button>
            <Button className="button-redirect" onClick={() => routeChange('/gamestore/users')}> Criar Conta </Button>
          </div>
        </div>
      </div>
    </>
  );
}
