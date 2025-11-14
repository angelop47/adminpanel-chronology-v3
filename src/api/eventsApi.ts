import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const eventsApi = {
  async getAll() {
    const res = await axios.get(`${API_URL}/events`);
    return res.data;
  },
};
