import { Divider } from "@mui/material";
import Teams from "./Teams";
import Players from "./Players";

function Settings() {


  return (
    <>
      <Players />
      <Divider sx={{ borderWidth: '3px', borderColor: 'red' }} />
      <Teams />
    </>
  )
}
export default Settings;
