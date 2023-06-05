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

const PlayerName= styled.div`
  font-size: 24px;
  font-weight: 700;
`

function PlayerCard({player}){

  return(
    <PlayerWrapper>
      <PlayerImage src={player.image}/>
      <div>
         <PlayerName>{player.name}</PlayerName>
         <img src={`https://www.countryflagicons.com/FLAT/64/${player.nation}.png`}/>

         <div>국적 {player.nation}</div>
         <div>시즌 {player.season}</div>
         <div>{player.height}CM</div>
         <div>{player.weight}KG</div>
         <div>팀 {player.team}</div>
         <div>포지션 {player.position}</div>
         <div>주발 {player.foot}</div>
         <div>속도 {player.stat.speed}</div>
         <div>슈팅 {player.stat.shoot}</div>
         <div>패스 {player.stat.pass}</div>
         <div>드리블 {player.stat.dribble}</div>
         <div>수비 {player.stat.defence}</div>
         <div>피지컬 {player.stat.physical}</div>
      </div>
    </PlayerWrapper>
  )
}

export default PlayerCard;
