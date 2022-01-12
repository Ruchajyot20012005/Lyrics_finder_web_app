import { Container, TextField, Button } from "@mui/material";
import React, { useState, useContext } from "react";
import { GlobleState } from "../pages";
import { Context } from "vm";

const SearchBox = () => {
  const { mystate, getTitle, heading } = useContext<Context>(GlobleState);
  const [title, setTitle] = useState("");

  function handleChange(e: Context) {
    e.preventDefault();
    setTitle(e.target.value);
  }
  console.log(title);

  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 4,
        mb: 10,
        p: 4,
        borderBottom: 1,
      }}
    >
      <h1>Find Lyrics of Song you want</h1>
      <div>
        <TextField
          onChange={handleChange}
          fullWidth
          id="fullWidth"
          label="Search Track"
          variant="outlined"
          sx={{ my: 4, width: "50%" }}
        />
      </div>
      <Button
        onClick={() => getTitle(title)}
        variant="contained"
        disableElevation
      >
        Find Lyrics
      </Button>
    </Container>
  );
};

export default SearchBox;
