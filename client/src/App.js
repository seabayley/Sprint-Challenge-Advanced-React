import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiUrl: 'http://localhost:5000/api/players',
      playerData: null,
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

        </div>
      )
  }
}

export default App;
