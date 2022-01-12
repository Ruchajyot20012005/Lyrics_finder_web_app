import React, { useEffect, useContext } from "react";
import { Container, Grid } from "@mui/material";
import SingleCard from "./SingleCard";
import { GlobleState } from "../pages";
import { Context } from "vm";

const Cards = () => {
  const { mystate, getTitle, heading } = useContext<Context>(GlobleState);
  return (
    <Container sx={{ textAlign: "center" }}>
      <h2>{heading}</h2>
      <Grid container spacing={3}>
        {mystate.map((item: Context) => (
          // eslint-disable-next-line react/jsx-key
          <Grid key={item.track.track_id} item xs={6}>
            <SingleCard key={item.track.track_id} track={item.track} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
