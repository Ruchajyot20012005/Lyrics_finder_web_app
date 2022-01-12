import { Container } from "@mui/material";
import axios from "axios";
import type { NextPage } from "next";
import { createContext, useState, useEffect } from "react";
import { Context } from "vm";
import Cards from "../components/Cards";
import SearchBox from "../components/SearchBox";

export const GlobleState = createContext({});

interface Iprops {
  e: Context;
}

const Home: NextPage = () => {
  const [searchedTitle, setSearchedTitle] = useState<Context>();
  const [state, setState] = useState<Object>([]);
  const [head, setHead] = useState("Top 10 Songs");

  function getTitle({ e }: Iprops) {
    if (e.length != 0) {
      setSearchedTitle(e);
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchedTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        .then((res) => setState(res.data.message.body.track_list))
        .catch((err) => console.log(err));
      setHead("Search result");
    }
  }

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => setState(res.data.message.body.track_list))
      .catch((err) => console.log(err));
  }, []);

  return (
    <GlobleState.Provider
      value={{ mystate: state, getTitle: getTitle, heading: head }}
    >
      <Container sx={{ my: 4 }}>
        <SearchBox />
        <Cards />
      </Container>
    </GlobleState.Provider>
  );
};

export default Home;
