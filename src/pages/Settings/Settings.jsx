import { Divider } from "@mui/material";
import Teams from "./Teams/index.jsx";
import Players from "./Players/index.jsx";

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
