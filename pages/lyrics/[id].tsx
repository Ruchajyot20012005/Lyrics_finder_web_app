import { Container, AppBar, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Context } from "vm";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const Lyrics = () => {
  const { query } = useRouter();
  const [track, setTrack] = useState<Context>();
  const [lyrics, setLyrics] = useState<Context>({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${query.id}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        setLyrics(res.data.message.body.lyrics);
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${query.id}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
      })
      .then((res) => {
        setTrack(res.data.message.body.track);
      })
      .catch((err) => console.log(err));
  }, []);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics) === null
  ) {
    return (
      <div>
        <Container
          sx={{ textAlign: "center", my: 10, boxShadow: 2, width: "75%" }}
        >
          <AppBar position="static" color="primary" sx={{ p: 2 }}>
            song
          </AppBar>
          <Box sx={{ my: 8 }}>Wait for loading of lyrics....</Box>
          <Link href="/">
            <Button sx={{ width: "auto", my: 2 }} variant="contained">
              Go Back
            </Button>
          </Link>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container
          sx={{ textAlign: "center", my: 10, boxShadow: 2, width: "75%" }}
        >
          <AppBar position="static" color="primary" sx={{ p: 2 }}>
            {track.track_name}
          </AppBar>
          <Box sx={{ my: 8 }}>{lyrics.lyrics_body}</Box>
          <Link href="/">
            <Button sx={{ width: "auto", my: 2 }} variant="contained">
              Go Back
            </Button>
          </Link>
        </Container>
      </div>
    );
  }
};

export default Lyrics;
