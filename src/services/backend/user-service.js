import api from "../api";

async function createUser(data) {
  return await api.post("api/users/", data).then((response) => response.data);
}

async function updateUser(id, data) {
  return await api
    .put(`api/users/${id}`, data)
    .then((response) => response.data);
}

async function deleteUser(id) {
  return api.put(`api/users/delete/${id}`).then((response) => response.data);
}

async function getUserById(id) {
  return api.get(`api/users/${id}`).then((response) => response.data);
}

async function getAllUsers() {
  return await api.get("api/users/get-all");
}

export { createUser, updateUser, deleteUser, getUserById, getAllUsers };
