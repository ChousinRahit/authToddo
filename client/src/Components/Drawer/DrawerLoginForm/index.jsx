import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const LoginForm = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    console.log(userName, password);
    
  };

  return (
    <form>
      <TextField
        label="Username"
        value={userName}
        onChange={e => {
          setUserName(e.target.value);
        }}
        name="name"
        margin="normal"
        style={{ width: "80%", marginLeft: "20px" }}
      />
      <TextField
        label="Password"
        name="password"
        valus={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
        type="password"
        margin="normal"
        style={{ width: "80%", marginLeft: "20px" }}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "18px" }}
        onClick={onSubmit}
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
