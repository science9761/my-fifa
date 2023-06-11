import { Box, Button, Dialog } from "@mui/material";
import { useState } from "react";
import { defaultPlayers } from "../../../data/defaultPlayers.jsx";
import PlayerCard from "../../../components/PlayerCard.jsx";

function Players() {
    const [players, setPlayers] = useState(defaultPlayers);
    const [modalOpen, setModalOpen] = useState(false);
    const deletePlayer = (name) => {        
        const removedPlayers = players.filter((p) => p.name !== name);
        setPlayers(removedPlayers);
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
            선수 추가
        </Button>
        <Box>
            {players.map((player) => <PlayerCard player={player} />)}
        </Box>
        <Dialog onClose={handleModalOpen} open={modalOpen}>
            푸리니
        </Dialog>
    </>
    )
}
export default Players;
