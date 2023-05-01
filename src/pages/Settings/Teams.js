import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function Teams() {
  const [teams, setTeams] = useState([
    {
      name: '심시티',
      league: '프리미어리그',
      nation: '영국',
    },
    {
      name: '맨체스터유나이티드',
      league: '프리미어리그',
      nation: '영국',
    },
    {
      name: '바르셀로나',
      league: '라리가',
      nation: '스페인',
    },
    {
      name: '유벤투스',
      league: '세리에A',
      nation: '이탈리아',
    },
    {
      name: '바이에른 뮌헨',
      league: '분데스리가',
      nation: '독일',
    },
  ]);

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