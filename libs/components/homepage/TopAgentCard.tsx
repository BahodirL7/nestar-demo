import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">
      <Box
        component={"img"}
        className={"card-img"}
        src="/img/profile/ben.jpg"
      ></Box>
      <Typography className="agent-name">
        <strong>Benjamin</strong>
      </Typography>
      <Typography className="agent-details">Agent Details</Typography>
    </Stack>
  );
};

export default TopAgentCard;
