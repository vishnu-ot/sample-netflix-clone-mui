import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Login() {
  const { setCredentials, submitHandler } = useContext(AuthContext);
  const userCredentialHandler = (e) => {
    const { name, value } = e.target;

    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <Box>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{
          // background: "#6DB3F2",
          // backgroundImage: "url(image.jpg)",
          height: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        {/* Showing Login input fields  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "400px",
            height: "500px",
            gap: "10px",
            backgroundColor: "primary",
            opacity: "0.9",
          }}
        >
          <Typography variant="h4" color="primary">
            Sign In
          </Typography>
          <Box sx={{ backgroundColor: "primary", width: "70%" }}>
            <TextField
              id="filled-basic"
              onChange={userCredentialHandler}
              placeholder="Email or Phone number"
              name="username"
              variant="filled"
              size="small"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ backgroundColor: "primary", width: "70%" }}>
            <TextField
              type="password"
              id="filled-basic"
              placeholder="password"
              size="small"
              variant="filled"
              color="primary"
              name="password"
              onChange={userCredentialHandler}
              sx={{ width: "100%" }}
            />
          </Box>

          <Button
            sx={{ width: "70%", marginTop: "50px" }}
            variant="contained"
            color="error"
            onClick={submitHandler}
          >
            Sign In
          </Button>
          <Typography marginLeft="35%" color="primary">
            Forget password?
          </Typography>
          <Typography variant="span" color="primary" marginTop="150px">
            New to MovieWorld? Sign up now.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Login;
