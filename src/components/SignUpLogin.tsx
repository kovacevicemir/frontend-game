import React, { useEffect, useState } from "react";
import { logIn, signUp } from "../data/Api";
import { copyPlayer } from "../helpers/copyPlayer";
import { Player } from "../models/Player";
import { CenterAlign, GameButton } from "./styled";

interface ISignUpLogin {
  setPlayer: any;
  playerRef: React.MutableRefObject<Player | null>;
}

const SignUpLogin: React.FC<ISignUpLogin> = ({ setPlayer, playerRef }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmitResponse = (res: any) => {
    if (res?.data?.success === true) {
      const player = copyPlayer(res?.data?.data);
      player.computePlayerStats();
      playerRef.current = player;
      setPlayer(player);
    } else {
      setError(res.data.data);
    }
  };

  const handleSubmit = async () => {
    if (isSignUp) {
      try {
        const res = await signUp(nickname, password);
        handleSubmitResponse(res);
      } catch (error) {
        setError("Something went wrong, you are offline?");
      }
    } else {
      try {
        const res = await logIn(nickname, password);
        handleSubmitResponse(res);
      } catch (error) {
        setError("Something went wrong, you are offline?");
      }
    }
  };

  // ISOLATING FRONTEND
  useEffect(() => {
    // GET PLAYER FROM LOCAL STORAGE & SET
    // @ts-ignore
    const existingPlayer = JSON.parse(localStorage.getItem("aegis_player"));

    if (existingPlayer) {
      // @ts-ignore
      const player_one = copyPlayer(existingPlayer);
      player_one.computePlayerStats();
      playerRef.current = player_one;
      setPlayer(player_one);
    } else {
      // NO PLAYER IN LOCAL STORAGE ? SET NEW ONE
      const newPlayer = {
        _id: "62ef7c0b4e08c03a15012b46",
        nickname: "Player",
        password: "admin",
        level: 1,
        equipedItems: {
          weapon: null,
          armor: null,
          boots: null,
          belt: null,
          ring: null,
          neck: null,
          shield: null,
          head: null,
        },
        inventoryItems: [],
        experience: 0,
        gold: 0,
        shopAssets: {
          attackSpeed: 0,
          attack: 0,
          deffense: 0,
          healthPoints: 0,
        },
        playerStatistics: {
          monsterKilled: 0,
          playersKilled: 0,
        },
        __v: 0,
      };

      //@ts-ignore
      localStorage.setItem("aegis_player", JSON.stringify(newPlayer));
      //@ts-ignore
      const storagePlayer = JSON.parse(localStorage.getItem("aegis_player"));
      // @ts-ignore
      const player = copyPlayer(storagePlayer);
      player.computePlayerStats();
      playerRef.current = player;
      setPlayer(player);
    }
  }, []);

  return (
    <CenterAlign
      style={{
        backgroundColor: "#05053d",
        boxShadow: "inset 0px 0px 150px 60px rgba(0, 0, 0, 1)",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "250px",
          gap: "10px",
          padding: "10px",
          color: "#fff",
        }}
      >
        <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
        <div>
          <GameButton
            style={{
              color: "whitesmoke",
              width: "100px",
              backgroundColor: isSignUp ? "rgb(2 67 193)" : "#30569f",
            }}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </GameButton>
          <GameButton
            style={{
              color: "whitesmoke",
              width: "100px",
              backgroundColor: !isSignUp ? "rgb(2 67 193)" : "#30569f",
            }}
            onClick={() => setIsSignUp(false)}
          >
            Log In
          </GameButton>
        </div>

        <label>Nickname</label>
        <input
          style={{ width: "100%", height: "25px" }}
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
          maxLength={12}
        />

        <label>Password</label>
        <input
          style={{ width: "100%", height: "25px" }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          maxLength={12}
        />

        <GameButton
          type="submit"
          onClick={() => handleSubmit()}
          style={{
            width: "100%",
            backgroundColor: "rgb(2 67 193)",
            color: "whitesmoke",
          }}
        >
          Submit
        </GameButton>
        <strong style={{ color: "red" }}>{error}</strong>
      </div>
    </CenterAlign>
  );
};

export default SignUpLogin;
