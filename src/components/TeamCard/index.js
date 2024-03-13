// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsDetails} = props
  const {id, teamName, teamImgUrl} = teamsDetails
  return (
    <li className="team-card-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImgUrl} alt={teamName} className="team-card-img" />
        <p className="team-card-heading">{teamName}</p>
      </Link>
    </li>
  )
}

export default TeamCard
