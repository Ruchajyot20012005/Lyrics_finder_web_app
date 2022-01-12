import React from "react";
import Box from "@mui/material/Box";
import { Card, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AlbumIcon from "@mui/icons-material/Album";
import Link from "next/link";

type props = {
  track: {
    track_name: string;
    track_id: string;
    artist_name: string;
  };
};

const SingleCard = ({ track }: props) => {
  return (
    <Card sx={{ display: "flex", boxShadow: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", textAlign: "left" }}>
          <Typography
            component="div"
            sx={{ fontSize: 18, display: "flex", alignItems: "center" }}
          >
            <PlayCircleIcon sx={{ mr: 1 }} />
            {track.track_name}
          </Typography>
          <Typography
            color="text.secondary"
            component="div"
            sx={{ fontSize: 16, display: "flex", alignItems: "center" }}
          >
            <AlbumIcon sx={{ mr: 1 }} />
            {track.artist_name}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Link href={`/lyrics/${track.track_id}`} passHref>
            <Button size="small" color="primary">
              See Lyrics <ArrowRightAltIcon sx={{ height: 38, width: 38 }} />
            </Button>
          </Link>
        </Box>
      </Box>
    </Card>
  );
};

export default SingleCard;
