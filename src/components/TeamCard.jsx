import styled from "styled-components";

const TeamLayout = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;

  display: flex;
  padding: 10px;
`;

const TeamImage = styled.img`
  width: 100px;
  height: 100px;
`;

const TeamInfo = styled.div`
  padding: 10px;
`;

const TeamName = styled.div`
  font-size: 30px;
`;

const TeamLeague = styled.div`
  display: flex;
`;

const TeamLeagueName = styled.div`
  font-size: 15px;
  color: gray;
`;

const TeamNation = styled.img`
  height: 20px;
  width: 20px;
`;

function TeamCard({team}) {

  return (
    <TeamLayout>
      <TeamImage src={team.logoImage} />

      <TeamInfo>
        <TeamName>{team.name}</TeamName>
        <TeamLeague>
          <TeamLeagueName>{team.league}</TeamLeagueName>
          <TeamNation
            src={`https://www.countryflagicons.com/FLAT/64/${team.nation}.png`}
          />
        </TeamLeague>
      </TeamInfo>
    </TeamLayout>
  );
}

export default TeamCard;
