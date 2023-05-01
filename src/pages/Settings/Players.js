import { Box, Button } from "@mui/material";
import { useState } from "react";
import { defaultPlayers } from "../../data/defaultPlayers";

function Players() {
    const [players, setPlayers] = useState(defaultPlayers);
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
