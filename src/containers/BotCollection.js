import React, { Component } from "react";
import BotCard from '../components/BotCard'


class BotCollection extends Component {
  

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => {
            return <BotCard bot={bot} deleteBot={this.props.deleteBot} releaseBot={this.props.releaseBot} addToBotArmy={this.props.addToBotArmy} key={bot.id}/>
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
