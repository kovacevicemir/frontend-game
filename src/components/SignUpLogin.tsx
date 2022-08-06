import React, { useState } from "react";
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
      const res = await signUp(nickname, password);
      handleSubmitResponse(res);
    } else {
      const res = await logIn(nickname, password);
      handleSubmitResponse(res);
    }
  };

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
