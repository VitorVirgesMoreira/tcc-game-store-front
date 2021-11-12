import React, { useState } from "react";
import "./styles.css";
import logoVice from "../../assets/imgs/vicegaming.png";
import { Button, Input, TextField } from "@material-ui/core";
import { createGame } from "../../services/backend/gameService";

export default function CreateGames() {
  const [name, setName] = useState("");
  const [developer, setDeveloper] = useState("");
  const [dateLaunch, setDateLaunch] = useState();
  const [price, setPrice] = useState("");

  const submitData = {
    name: name,
    developer: developer,
    dateLaunch: dateLaunch,
    price: price,
  };

  const handleClick = async () => {
    const response = await createGame(submitData);

    console.log(response);
    if (response.status === 200) {
      
    }
  };

  return (
    <>
      <div className="header">
        <img src={logoVice} alt="logoViceGaming" width="210px" height="120px" />
      </div>
      <div className="create-game-form">
        <div className="container-create-game">
          <div className="inputs">
            <Input
              className="nameGame"
              placeholder="Nome do Jogo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              className="developer"
              placeholder="Desenvolvedora"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />
            <Input
              className="price"
              placeholder="Preço"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label> Data de lançamento </label>
            <TextField
              id="date"
              type="date"
              className="launchDate"
              value={dateLaunch}
              onChange={(e) => setDateLaunch(e.target.value)}
            />
          </div>
          <Button
            className="button-confirm"
            type="submit"
            variant="contained"
            onClick={async () => handleClick()}
          >
            Criar Jogo
          </Button>
        </div>
      </div>
    </>
  );
}
