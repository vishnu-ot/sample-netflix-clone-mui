import { createTheme } from "@mui/material";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const MyTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [searchInputValue, setSearchInputValue] = useState("");
  const [movieList, setMovieList] = useState([]);
  console.log(searchInputValue, "defswaesdf");
  const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

  const getMovie = async () => {
    const response = await axios(API_URL, {
      params: {
        query: searchInputValue,
      },
    });

    setMovieList(response.data.results);
  };

  const initialMovie = async () => {
    const response = await axios(API_URL, {
      params: {
        query: "anako",
      },
    });

    setMovieList(response.data.results);
  };
  useEffect(() => {
    if (searchInputValue === "") {
      initialMovie();
      return;
    }
    let timer = setTimeout(() => {
      if (searchInputValue) {
        getMovie();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchInputValue]);

  return (
    <MovieContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        mode,
        setMode,
        MyTheme,
        movieList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
