import { Box, Typography } from "@mui/material";
import { useState } from "react";

function Settings(){
  const [teams,setTeams]=useState(["멘유",'바르셀로나','레알마드리드']);
  return(
    <Box>
      <Typography variant="h1">Settings</Typography>
      {
        teams.map((team)=> <Box>{team}</Box>)
      }
    </Box>
  )
}
export default Settings;
