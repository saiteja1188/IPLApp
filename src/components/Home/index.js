// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoader: true, teamsData: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(team => ({
      id: team.id,
      teamName: team.name,
      teamImgUrl: team.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoader: false})
  }

  renderMatchList = () => {
    const {teamsData} = this.state
    return (
      <ul className="teams-list">
        {teamsData.map(team => (
          <TeamCard teamsDetails={team} key={team.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" hight={50} width={50} />
    </div>
  )

  render() {
    const {isLoader} = this.state
    return (
      <div className="home-container">
        <div className="team-list-container">
          <div className="teams-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo-img"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          {isLoader ? this.renderLoader() : this.renderMatchList()}
        </div>
      </div>
    )
  }
}

export default Home
