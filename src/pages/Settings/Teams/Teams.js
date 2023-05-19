import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { defaultTeams } from "../../../data/defaultTeams";

function Teams() {
  const [teams, setTeams] = useState(defaultTeams);
  const [modalOpen, setModalOpen] = useState(false);

  const deleteTeam = (name) => {
    const removedTeams = teams.filter((t) => t.name !== name);
    setTeams(removedTeams);
  }

  const handleClose = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <Box>
      <Button 
        variant="contained"
        color="success"
        onClick={()=>handleClose()}
      >
        팀 추가
      </Button>
      {
        teams.map((t) => (
          <Box sx={{ border: '1px solid gray', borderRadius: '7px', padding: '20px', margin: '10px' }}>
            <Box>{t.league}</Box>
            <Box>{t.nation}</Box>
            <Box>{t.name}</Box>
            <Button
              variant="contained"
              onClick={() => deleteTeam(t.name)}
            >
              삭제
            </Button>
          </Box>
        ))
      }
      <Dialog open={modalOpen} onClose={handleClose} >
        <Typography>I am not a king I am not a god I am kimhwijae</Typography>
      </Dialog>
    </Box>
  )
}
export default Teams;
