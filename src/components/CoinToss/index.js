// Write your code here
import {Component} from 'react'

import './index.css'

const HeadsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imgUrl: HeadsImgUrl, headsCount: 0, tailsCount: 0}

  onClickBtn = () => {
    const {headsCount, tailsCount} = this.state
    const addCount = Math.floor(Math.random() * 2)

    let setImg = ''
    let currentHeadsCount = headsCount
    let currentTailsCount = tailsCount

    if (addCount === 0) {
      setImg = HeadsImgUrl
      currentHeadsCount += 1
    } else {
      setImg = TailsImgUrl
      currentTailsCount += 1
    }

    this.setState({
      imgUrl: setImg,
      headsCount: currentHeadsCount,
      tailsCount: currentTailsCount,
    })
  }

  render() {
    const {imgUrl, headsCount, tailsCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="caption">Heads (or) Tails</p>
          <img src={imgUrl} className="image" alt="toss result" />
          <button type="button" className="btn" onClick={this.onClickBtn}>
            Toss Coin
          </button>
          <div className="count">
            <p className="count-details">Total: {headsCount + tailsCount}</p>
            <p className="count-details">Heads: {headsCount}</p>
            <p className="count-details">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
