import axios from "axios";
import { Player } from "../models/Player";

export const signUp = async (nickname: string, password: string) => {
  return await axios.post("http://localhost:5000/signup", {
    nickname,
    password,
  });
};
export const logIn = async (nickname: string, password: string) => {
  return await axios({
    url: "http://localhost:5000/login",
    method: "post",
    data: {
      nickname,
      password,
    },
  });
};
export const update = async (player: Player) => {
  return await axios.put("http://localhost:5000/update", player);
};
