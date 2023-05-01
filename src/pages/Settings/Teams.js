import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { defaultTeams } from "../../data/defaultTeams";

function Teams() {
  const [teams, setTeams] = useState(defaultTeams);

  const deleteTeam = (name) => {
    const removedTeams = teams.filter((t)=>t.name!==name);
    setTeams(removedTeams);
  }

  return (
    <Box>

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
    </Box>
  )
}
export default Teams;