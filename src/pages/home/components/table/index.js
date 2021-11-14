import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Moment from "moment";
import NumberFormat from "react-number-format";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import "./styles.css";
import api from "../../../../services/api";
import UpdateGameModal from "./modalUpdate";

export function GamesTable(props) {
  const [openModal, setOpenModal] = useState(false);
  const [game, setGame] = useState();

  const handleDelete = async (id) => {
    await api.put(`games/delete/${id}`);
    document.location.reload(true);
  };

  const openModalUpdate = async (id) => {
    const response = await api.get(`games/${id}`);

    if (response.status === 200) {
      setOpenModal(true);
      setGame(response.data);
      return;
    }
  };

  const closeModalUpdate = () => {
    setOpenModal(false);
  };

  return (
    <Table>
      <TableHead>
        <TableRow className="titleRow">
          <TableCell className="idCell">Id</TableCell>
          <TableCell className="nameCell">Nome do Jogo</TableCell>
          <TableCell className="developerCell">Desenvolvedora</TableCell>
          <TableCell className="dateCell">Data de lançamento</TableCell>
          <TableCell className="priceCell">Preço</TableCell>
          <TableCell className="actionsCell">Ações</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.games?.map((games, index) => (
          <TableRow key={index}>
            <TableCell className="idCell">{games.id}</TableCell>
            <TableCell className="nameCell">{games.name}</TableCell>
            <TableCell className="developerCell">{games.developer}</TableCell>
            <TableCell className="dateCell">
              {Moment(games.dateLaunch).format("DD/MM/YYYY")}
            </TableCell>
            <TableCell className="priceCell">
              <NumberFormat
                value={games.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R$"}
              />
            </TableCell>
            <TableCell className="actionsCell">
              <CreateIcon
                className="edit"
                onClick={async () => openModalUpdate(games.id)}
              />
              <DeleteIcon
                className="trash"
                onClick={async () => handleDelete(games.id)}
              />
              <UpdateGameModal
                game={game}
                isOpenModal={openModal}
                handleClose={() => closeModalUpdate()}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
