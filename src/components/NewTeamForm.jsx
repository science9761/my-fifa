import { Stack, TextField } from "@mui/material";

function NewTeamForm(){
    return(
        <>
            <Stack sx={{padding:'10px'}} gap={2}>
                <TextField label="Outlined" variant="outlined" />
                <TextField label="Outlined" variant="outlined" />
                <TextField label="Outlined" variant="outlined" />
                <TextField label="Outlined" variant="outlined" />
            </Stack>
        </>
    )
}

export default NewTeamForm;
