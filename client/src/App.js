import React from 'react'
import './App.css'
import { PlayerList } from './components/PlayerList'
import { DataChart } from './components/DataChart'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiUrl: 'http://localhost:5000/api/players',
      playerData: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.getPlayerData()
  }

  getPlayerData() {
    let url = (this.state.apiUrl)
    axios.get(url)
      .then(res => {
        this.setState({ playerData: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return !this.state.playerData ? <p>Loading...</p> :
      (
        <div>
          <DataChart props={this.state.playerData} />
          <PlayerList playerData={this.state.playerData} />
        </div>
      )
  }
}

export default App;
