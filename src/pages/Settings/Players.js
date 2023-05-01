import { Box, Button } from "@mui/material";
import { useState } from "react";

function Players() {
    const [players, setPlayers] = useState([
        {
            name: "즐라탄 이브라히모비치",
            nation: '스웨덴',
            season: '09'
        },
        {
            name: '리오넬 박지성',
            nation: '아르헨티나민국',
            season: "09"
        },
        {
            name: '헤리케인',
            nation: '영국',
            season: '87'
        },
        {
            name: '날강두',
            nation: '한반도',
            season: 'WC22'
        },
    ]);
    const deletePlayer = (name) => {
        const removedPlayers = players.filter((p) => p.name !== name);
        setPlayers(removedPlayers);

    }

    return (
        <Box>

            {
                players.map((p) => (
                    <Box sx={{ border: '1px solid gray', borderRadius: '7px', padding: '20px', margin: '10px' }}>
                        <Box>{p.season}</Box>
                        <Box>{p.nation}</Box>
                        <Box>{p.name}</Box>
                        <Button
                            variant="contained"
                            onClick={() => deletePlayer(p.name)}
                        >
                            삭제
                        </Button>

                    </Box>
                ))
            }
        </Box>

    )
}
export default Players;
