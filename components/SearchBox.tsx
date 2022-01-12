import { Container, TextField, Button } from "@mui/material";
import React, { useState, useContext } from "react";
import { Context } from "vm";
import { GlobleState } from "../pages";

const SearchBox = () => {
  const { mystate, getTitle, heading } = useContext<Context>(GlobleState);
  const [title, setTitle] = useState("");

  function handleChange(e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }): void {
    e.preventDefault();
    setTitle(e.target.value);
  }

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
        onClick={() => {
          getTitle(title);
        }}
        variant="contained"
        disableElevation
      >
        Find Lyrics
      </Button>
    </Container>
  );
};

export default SearchBox;
