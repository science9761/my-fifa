import { Box, Button } from "@mui/material";

function TeamCard({ team }) {
  return (
    <Box sx={{ border: '1px solid gray', borderRadius: '7px', padding: '20px', margin: '10px' }}>
      <Box>{team.league}</Box>
      <Box>{team.nation}</Box>
      <Box>{team.name}</Box>
      <Button
          variant="contained"
          onClick={() => deleteTeam(team.name)}
      >
          삭제
      </Button>
    </Box>
  )
}

export default TeamCard;
