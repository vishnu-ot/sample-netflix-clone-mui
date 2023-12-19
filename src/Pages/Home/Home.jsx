import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../../Components/Header/Header";
import Searchbox from "../../Components/Searchbox/Searchbox";
import SearchList from "../../Components/SearchList/SearchList";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <Box>
      <Header />
      <Stack sx={{ marginTop: "66px" }}>
        <Box sx={{ marginTop: "50px" }}>
          <Searchbox />
        </Box>
        <Box sx={{ marginTop: "40px" }}>
          <SearchList />
        </Box>
        <Box>
          <Footer />
        </Box>
      </Stack>
    </Box>
  );
}

export default Home;
