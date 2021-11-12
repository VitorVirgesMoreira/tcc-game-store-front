import api from "../api";

async function createGame(data) {
  return await api.post("api/games", data).then((response) => response.data);
}

async function updateGame(id, data) {
  return await api
    .put(`api/games/${id}`, {
      Name: data.Name,
      Developer: data.Developer,
      DateLaunch: data.DateLaunch,
      Price: data.Price,
    })
    .then((response) => response.data);
}

async function deleteGame(id) {
  return api.put(`api/games/delete/${id}`).then((response) => response.data);
}

async function getGameById(id) {
  return api.get(`api/games/${id}`).then((response) => response.data);
}

async function getAllGames() {
  return await api.get("api/games/get-all");
}

export { createGame, updateGame, deleteGame, getGameById, getAllGames };
