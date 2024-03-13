// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  console.log(recentMatchDetails)
  const {competingTeamLogo, competingTeam, result, matchStatus} =
    recentMatchDetails

  const getMatchStatus = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const IsStatus = `match-status ${getMatchStatus(matchStatus)}`

  return (
    <li className="match-card-container">
      <img src={competingTeamLogo} alt={competingTeam} className="card-logo" />
      <p className="card-heading">{competingTeam}</p>
      <p className="card-result">{result}</p>
      <p className={IsStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
