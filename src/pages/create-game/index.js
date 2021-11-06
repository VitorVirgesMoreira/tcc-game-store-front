import React from "react";
import "./styles.css";
import logoVice from "../../assets/imgs/vicegaming.png";
import { Button, Input, TextField } from "@material-ui/core";

export default function CreateGames() {
  return (
    <>
      <div className="header">
        <img src={logoVice} alt="logoViceGaming" width="210px" height="120px" />
      </div>
      <div className="create-game-form">
        <div className="container-create-game">
          <div className="inputs">
            <Input className="nameGame" placeholder="Nome do Jogo" />
            <Input className="developer" placeholder="Desenvolvedora" />
            <Input className="price" placeholder="Preço" />
            <label> Data de lançamento </label>
            <TextField
              id="date"
              type="date"
              value="2022-01-01"
              className="launchDate"
            />
          </div>
          <Button className="button-confirm"> Criar Jogo </Button>
        </div>
      </div>
    </>
  );
}
