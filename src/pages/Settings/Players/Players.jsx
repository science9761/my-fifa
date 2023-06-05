import { Box, Button } from "@mui/material";
import { useState } from "react";
import { defaultPlayers } from "../../../data/defaultPlayers.jsx";
import PlayerCard from "../../../components/PlayerCard.jsx";

function Players() {
    const [players, setPlayers] = useState(defaultPlayers);
    const deletePlayer = (name) => {
        const removedPlayers = players.filter((p) => p.name !== name);
        setPlayers(removedPlayers);
    }

    return (
        <Box>
            {players.map((player) => <PlayerCard player={player} />)}
        </Box>

    )
}
export default Players;
