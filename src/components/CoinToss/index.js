import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    imageUrl: ' https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        totalCount: prevState.headsCount + prevState.tailsCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.headsCount + 1,
        totalCount: prevState.headsCount + prevState.tailsCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, imageUrl} = this.state

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-image" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total-count">Total: {totalCount}</p>
            <p className="heads-count">Heads: {headsCount}</p>
            <p className="tails-count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
