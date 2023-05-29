import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router";

function Settings() {

  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={()=>navigate('/settings/players')}
      >
        선수 설정 페이지
      </Button>
      <Divider sx={{ borderWidth: '3px', borderColor: 'red' }} />
      <Button
        onClick={()=>navigate('/settings/teams')}
      >
        팀 설정 페이지
      </Button>
    </>
  )
}
export default Settings;
