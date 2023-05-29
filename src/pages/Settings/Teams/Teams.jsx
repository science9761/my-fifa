import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { defaultTeams } from "../../../data/defaultTeams.jsx";
import TeamCard from "../../../components/TeamCard.jsx";

function Teams() {
  const [teams, setTeams] = useState(defaultTeams);
  const [open, setOpen] = useState(false);

  const deleteTeam = (name) => {
    const removedTeams = teams.filter((t) => t.name !== name);
    setTeams(removedTeams);
  }

  const handleClose = () => {
    setOpen(!open);
  }

  return (
    <>
    <Button 
      onClick={handleClose}
      variant="contained"
      color="success"
    >
      팀 추가
    </Button>
    <Box>
      {
        teams.map((team,i) => (
          <TeamCard team={team} key={i}/>
        ))
      }
    </Box>
    <Dialog onClose={handleClose} open={open}>
      하이
    </Dialog>
    </>
  )
}
export default Teams;
