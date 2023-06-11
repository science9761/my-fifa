import { Box, Button, Dialog, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { defaultTeams } from "../../../data/defaultTeams.jsx";
import TeamCard from "../../../components/TeamCard.jsx";
import NewTeamForm from "../../../components/NewTeamForm.jsx";

function Teams() {
  const [teams, setTeams] = useState(defaultTeams);
  const [modalOpen, setModalOpen] = useState(false);
  
  const deleteTeam = (name) => {
    const removedTeams = teams.filter((t) => t.name !== name);
    setTeams(removedTeams);
  }

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={()=>handleModalOpen()}
      >
        팀 추가
      </Button>
      <Box sx={{margin:'10px'}}>
        {
          teams.map((team,i) => (
            <TeamCard team={team} key={i}/>
          ))
        }
      </Box>
      <Dialog onClose={handleModalOpen} open={modalOpen}>
        <NewTeamForm/>
      </Dialog>
    </>
  )
}
export default Teams;
