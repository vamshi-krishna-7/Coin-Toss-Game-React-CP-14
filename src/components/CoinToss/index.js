// Write your code here

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        tossImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, tossImg} = this.state

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="toss-head">Coin Toss Game</h1>
          <p className="toss-para">Heads (or) Tails</p>
          <img src={tossImg} className="toss-img" alt="toss result" />
          <button className="toss-btn" type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="toss-results-list">
            <p className="toss-list-item">Total: {headsCount + tailsCount}</p>
            <p className="toss-list-item">Heads: {headsCount}</p>
            <p className="toss-list-item">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
