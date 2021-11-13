import React, { useState, useEffect } from "react";
import "./styles.css";
import logoVice from "../../assets/imgs/vicegaming.png";
import { GamesTable } from "./components/table";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Loading from "../../components/Loading";

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState();
  
  const history = useHistory();
  function routeChange(path) {
    history.push(path);
  }

  const getGames = async () => {
    const result = await api.get("games/get-all");
    setGames(result.data.reverse());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(getGames, 1000);
  }, []);

  return (
    <div>
      <div className="header">
        <img src={logoVice} alt="logoViceGaming" width="210px" height="120px" />
      </div>
      <div className="table">
        <div>
          <Button
            className="button-redirect-to-games"
            onClick={() => routeChange("games")}
          >
            Adicionar Jogo
          </Button>
        </div>
        <GamesTable games={games} />
        <div className="loading-icon-table">
          {loading ? <Loading/> : ""}
        </div>
      </div>
    </div>
  );
}
