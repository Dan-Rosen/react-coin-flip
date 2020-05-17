import React, { Component } from 'react'
import { choice } from '../helpers'

import Coin from './Coin'

import styles from './CoinContainer.module.css'

import heads from '../images/heads.jpg'
import tails from '../images/tails.jpg'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: heads },
            { side: 'tails', imgSrc: tails }
        ]
    }

    constructor(props) {
        super(props)

        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }

        this.flipCoin = this.flipCoin.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin() {
        const newCoin = choice(this.props.coins)
        this.setState((curState) => {
            return {
                currCoin: newCoin,
                nFlips: curState.nFlips + 1,
                nHeads: curState.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: curState.nTails + (newCoin.side === 'tails' ? 1 : 0)
            }
        })
    }

    handleClick(e) {
        this.flipCoin()
    }

    render() {
        const { nFlips, nHeads, nTails, currCoin } = this.state
        return (
            <div className={styles.CoinContainer}>
                <h2>Let's flip a coin!</h2>
                {currCoin && <Coin info={currCoin} />}
                <button onClick={this.handleClick}>Flip the coin</button>
                <p>
                    Out of {nFlips} flips, there have been {nHeads} heads and{' '}
                    {nTails} tails
                </p>
            </div>
        )
    }
}

export default CoinContainer
