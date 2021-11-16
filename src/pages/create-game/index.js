import React, { useState } from "react";
import "./styles.css";
import logoVice from "../../assets/imgs/vicegaming.png";
import { Button, Input } from "@material-ui/core";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function CreateGames() {
  function initialState() {
    return {
      name: "",
      developer: "",
      price: "",
      dateLaunch: new Date("YYYY/MM/DD"),
    };
  }
  const [values, setValues] = useState(initialState);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function routeChange(path) {
    history.push(path);
  }

  const handleClick = async () => {
    const response = await api.post("games", values);

    if (response?.status === 200) {
      routeChange("home");
    }

    setValues(initialState);
  };

  return (
    <>
      <div className="header">
        <img src={logoVice} alt="logoViceGaming" width="210px" height="120px" />
      </div>
      <div className="create-game-form">
        <div className="container-create-game">
          <div className="inputs">
          <label> Nome do Jogo </label>
            <Input
              id="name"
              name="name"
              className="nameGame"
              placeholder="Nome do Jogo"
              value={values.name}
              onChange={onChange}
            />
            <label> Desenvolvedora </label>
            <Input
              id="developer"
              name="developer"
              className="developer"
              placeholder="Desenvolvedora"
              value={values.developer}
              onChange={onChange}
            />
            <label> Preço </label>
            <Input
              id="price"
              name="price"
              className="price"
              placeholder="Preço"
              value={values.price}
              onChange={onChange}
            />
            <label> Data de lançamento </label>
            <Input
              id="dateLaunch"
              name="dateLaunch"
              type="date"
              className="launchDate"
              placeholder="Data"
              value={values.dateLaunch}
              onChange={onChange}
            />
          </div>
          <Button
            className="button-create"
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
