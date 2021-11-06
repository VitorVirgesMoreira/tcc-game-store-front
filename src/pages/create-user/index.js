import React from "react";
import "./styles.css";
import logoVice from "../../assets/imgs/vicegaming.png";
import { Button, Input } from "@material-ui/core";

export default function CreateUsers() {
  return (
    <>
      <div className="header">
        <img src={logoVice} alt="logoViceGaming" width="210px" height="120px" />
      </div>
      <div className="create-user-form">
        <div className="container-create-user">
          <div className="inputs-create-user">
            <Input className="name-user" placeholder="Nome de Usuário" />
            <Input className="email-user" placeholder="Email" />
            <Input className="password-user" placeholder="Senha" />
            <Input
              className="confirmPasswordUser"
              placeholder="Confirme sua senha"
            />
          </div>
          <Button className="button-confirm"> Criar Conta </Button>
        </div>
      </div>
    </>
  );
}
