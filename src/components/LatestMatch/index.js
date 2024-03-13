import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    date,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  console.log(latestMatchDetails)

  return (
    <div className="latest-matches-container">
      <h1 className="latest-matches-heading">Latest Matches</h1>
      <div className="latest-matches-card">
        <div className="latest-matches-details">
          <p className="latest-team">{competingTeam}</p>
          <p className="latest-date">{date}</p>
          <p className="latest-venue">{venue}</p>
          <p className="latest-result">{result}</p>
        </div>
        <img src={competingTeamLogo} alt={competingTeam} className="logo" />
        <div className="latest-matches-details">
          <p className="latest-label">First Innings</p>
          <p className="latest-value">{firstInnings}</p>
          <p className="latest-label">Second Innings</p>
          <p className="latest-value">{secondInnings}</p>
          <p className="latest-label">Man Of The Match</p>
          <p className="latest-value">{manOfTheMatch}</p>
          <p className="latest-label">Umpires</p>
          <p className="latest-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
