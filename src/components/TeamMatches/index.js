// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoader: true}

  componentDidMount() {
    this.getTeamMatch()
  }

  getFormattedDetails = obj => ({
    id: obj.id,
    date: obj.date,
    competingTeam: obj.competing_team,
    competingTeamLogo: obj.competing_team_logo,
    firstInnings: obj.first_innings,
    manOfTheMatch: obj.man_of_the_match,
    matchStatus: obj.match_status,
    result: obj.result,
    secondInnings: obj.second_innings,
    umpires: obj.umpires,
    venue: obj.venue,
  })

  getTeamMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchesApiUrl}/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedDetails(data.latest_match_details),
      recentMatch: data.recent_matches.map(eachRecent =>
        this.getFormattedDetails(eachRecent),
      ),
    }
    this.setState({teamMatchesData: formattedData, isLoader: false})
  }

  renderRecentMatch = () => {
    const {teamMatchesData} = this.state
    const {recentMatch} = teamMatchesData

    return (
      <ul className="recent-container">
        {recentMatch.map(eachMatch => (
          <MatchCard recentMatchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderMatchList = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatch} = teamMatchesData

    return (
      <div className="response-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchDetails={latestMatch} />
        {this.renderRecentMatch()}
      </div>
    )
  }

  getClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" hight={50} width={50} />
    </div>
  )

  render() {
    const {isLoader} = this.state
    const className = `team-match-container ${this.getClassName()}`
    return (
      <div className={className}>
        {isLoader ? this.renderLoader() : this.renderMatchList()}
      </div>
    )
  }
}

export default TeamMatches
