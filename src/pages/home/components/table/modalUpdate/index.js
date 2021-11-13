import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import "./styles.css";
import { Button, Input } from "@material-ui/core";
import api from "../../../../../services/api";
import Moment from "moment";

export default function UpdateGameModal({ game, isOpenModal, handleClose }) {
  function initialState() {
    return {
      name: "",
      developer: "",
      price: "",
      dateLaunch: new Date(),
    };
  }
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  const handleClick = async () => {
    const response = await api.put(`games/${game.id}`, values);

    if (response?.status === 200) {
      document.location.reload(true);
    }

    setValues(initialState);
  };

  return (
    <Modal open={isOpenModal} onClose={handleClose}>
      <div className="container-create-game-modal">
        <div className="inputs-modal">
          <Input
            id="name"
            name="name"
            className="nameGameModal"
            placeholder={game?.name}
            value={values.name}
            onChange={onChange}
          />
          <Input
            id="developer"
            name="developer"
            className="developerModal"
            placeholder={game?.developer}
            value={values.developer}
            onChange={onChange}
          />
          <Input
            id="price"
            name="price"
            className="priceModal"
            placeholder={game?.price}
            value={values.price}
            onChange={onChange}
          />
          <label> Data de lançamento </label>
          <Input
            id="dateLaunch"
            name="dateLaunch"
            type="date"
            className="launchDateModal"
            defaultValue={Moment(game?.dateLaunch).format("DD/MM/YYYY")}
            value={values.dateLaunch}
            onChange={onChange}
          />
        </div>
        <Button
          className="button-create-modal"
          type="submit"
          variant="contained"
          onClick={async () => handleClick()}
        >
          Atualizar Jogo
        </Button>
      </div>
    </Modal>
  );
}
