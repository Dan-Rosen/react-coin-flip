import React, { Component } from 'react'

import styles from './Coin.module.css'

class Coin extends Component {
    render() {
        return (
            <div className={styles.Coin}>
                <img src={this.props.info.imgSrc} alt={this.props.info.side} />
            </div>
        )
    }
}

export default Coin
