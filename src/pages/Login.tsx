import { Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogName } from "../redux/username/usernameSlice.js";

export default function Login() {
  const navigate = useNavigate();
  const userName = useRef<any>();
  const pass = useRef();

  const dispatch = useDispatch();

  async function handelSubmit() {
    const response = await fetch("Url", {
      method: "POST",
      body: {
        user: userName.current.value,
        pass: pass.current.value,
      },
    });

    dispatch(userLogName(userName.current.value));

    // Assuming response.status = 200
    if (response.status >= 400) {
      navigate("/user");
    }
  }
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateAreas: `
    "brandname brandname"
      "user user" 
      "pass pass"
      "login login"
      "newuser reset"
      `,
          gap: "10px",
          minWidth: "400px",
        }}
      >
        <Typography sx={{ gridArea: "brandname", color: "black" }} variant="h2">
          User Generator
        </Typography>
        <TextField
          sx={{ gridArea: "user" }}
          id="user"
          inputRef={userName}
        ></TextField>
        <TextField
          sx={{ gridArea: "pass" }}
          type="password"
          id="pass"
          inputRef={pass}
        ></TextField>
        <Button
          sx={{ gridArea: "login" }}
          variant="contained"
          onClick={handelSubmit}
        >
          Login
        </Button>
        <a href="#" style={{ gridArea: "newuser" }}>
          new user
        </a>
        <a href="#" style={{ gridArea: "reset" }}>
          {" "}
          reset
        </a>
      </div>
    </>
  );
}
