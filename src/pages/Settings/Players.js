import { Box } from "@mui/material";
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
            season: '흥민이랑 친구먹음'
        }
    ]);

    return (
        <Box>

            {
                players.map((p) => (
                    <Box sx={{ border: '1px solid gray', borderRadius: '7px', padding: '20px', margin: '10px' }}>
                        <Box>{p.season}</Box>
                        <Box>{p.nation}</Box>
                        <Box>{p.name}</Box>
                    </Box>
                ))
            }
        </Box>

    )
}

export default Players;
