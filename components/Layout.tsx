import React, { ReactNode } from "react";
import { Container, Grid } from "@mui/material";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Head>
        <title>LyricsFinder</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Grid sx={{ bgcolor: "primary.main", p: 2, color: "white" }}>
          <div>LyricsFinder</div>
        </Grid>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
