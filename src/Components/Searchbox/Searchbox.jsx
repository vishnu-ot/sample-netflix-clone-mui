import { AppBar, Box, Container, InputBase } from "@mui/material";
import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import { Close } from "@mui/icons-material";

function Searchbox() {
  const { searchInputValue, setSearchInputValue } = useContext(MovieContext);

  const inputChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  };

  const closeButtonHandler = () => {
    setSearchInputValue("");
  };
  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{
        borderRadius: "10px",
        height: "60px",
        // position: "fixed",
        // marginTop: "-85px",
        width: "50%",

        marginLeft: {
          xs: "100px",
          sm: "200px",
          md: "400px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#585858",
          width: "100%",
          padding: "0 10px",
          borderRadius: "4px",
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
        }}
      >
        <InputBase
          placeholder="Search your movie here..."
          value={searchInputValue}
          onChange={inputChangeHandler}
          fullWidth
          sx={{ height: "60px" }}
        />
        {searchInputValue && <Close onClick={closeButtonHandler} />}
      </Box>
    </Box>
  );
}

export default Searchbox;
