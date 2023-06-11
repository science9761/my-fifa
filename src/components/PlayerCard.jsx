import styled from "styled-components";

const PlayerWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;

  display: flex;
  padding: 10px;
  margin: 10px;
`;

const PlayerImage = styled.img`
  width: 150px;
  height: 150px;
`;

const PlayerNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Season = styled.div`
  border-radius: 5px;
  border: 1px solid gray;

  padding: 2px 8px 2px 8px;
`

const PlayerName= styled.div`
  font-size: 24px;
  font-weight: 700;
`

const PhysicalWrapper = styled.div`
  display: flex;
  gap: 5px;
`

const StatWrapper = styled.div`

`

const StatName = styled.div`

`

const StatNumber = styled.div`

`

function PlayerCard({player}){

  return(
    <PlayerWrapper>
      <PlayerImage src={player.image}/>
      <div>
          <PlayerNameWrapper>
            <PlayerName>{player.name}</PlayerName>
            <Season>{player.season}</Season>
          </PlayerNameWrapper>
         <img src={`https://www.countryflagicons.com/FLAT/64/${player.nation}.png`}/>
         <PhysicalWrapper>
          <div>{player.height}cm</div>
          <div>{player.weight}kg</div>
         </PhysicalWrapper>
         <div>팀 {player.team}</div>
         <div>포지션 {player.position}</div>
         <div>주발 {player.foot}</div>
         <StatWrapper>
            <StatName>
              속도
            </StatName>
            <StatNumber>
              {player.stat.speed}
            </StatNumber>
         </StatWrapper>
         <StatWrapper>
            <StatName>
              슈팅
            </StatName>
            <StatNumber>
             {player.stat.shoot}
            </StatNumber>
         </StatWrapper>
         <div>패스 {player.stat.pass}</div>
         <div>드리블 {player.stat.dribble}</div>
         <div>수비 {player.stat.defence}</div>
         <div>피지컬 {player.stat.physical}</div>
      </div>
    </PlayerWrapper>
  )
}

export default PlayerCard;
