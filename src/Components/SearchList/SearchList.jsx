import {
  Box,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import InfoIcon from "@mui/icons-material/Info";

function SearchList() {
  const { movieList } = useContext(MovieContext);

  const StyledImageList = styled(ImageListItem)(({ theme }) => ({
    transition: "transform 0.5s ease-in-out",
    "&:hover": {
      cursor: "pointer", // Change cursor style on hover
      opacity: 0.8, // Reduce opacity on hover
      transform: `scale(1.1)`,
      // boxShadow: `5px 10px ${theme.palette.primary.main}`, // Add a subtle shadow on hover
    },
    width: "100px",
    height: "100px",
    root: {
      maxWidth: 310,
      transition: "transform 0.15s ease-in-out",
    },
    ImageListItem: {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  }));
  return (
    <Container bgcolor={"background.default"} color={"text.primary"}>
      <ImageList
        cols={3}
        sx={{
          // marginTop: "150px",
          height: "65vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          "& .MuiImageListItem-root": {
            flex: "0 0 10%",
            margin: "10px 10px",
          },
        }}
      >
        {movieList?.map((item) => {
          return (
            <Box>
              <StyledImageList>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt="Image"
                  loading="lazy"
                />
                <Typography variant="span" color="primary">
                  {item.title}
                </Typography>
              </StyledImageList>
            </Box>
          );
        })}
      </ImageList>
    </Container>
  );
}

export default SearchList;
