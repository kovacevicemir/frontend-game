import axios from "axios";
import { Player } from "../models/Player";

export const signUp = async (nickname: string, password: string) => {
  return await axios.post("http://localhost:5010/signup", {
    nickname,
    password,
  });
};
export const logIn = async (nickname: string, password: string) => {
  return await axios.post("http://localhost:5010/login", {
    nickname,
    password,
  });
};
export const update = async (player: Player) => {
  return await axios.put("http://localhost:5010/update", player);
};
