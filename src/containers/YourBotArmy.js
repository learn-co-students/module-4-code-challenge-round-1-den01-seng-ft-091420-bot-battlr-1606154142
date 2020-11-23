import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.yourBots.map(bot => {
            return <BotCard bot={bot} key={bot.id} releaseBot={this.props.releaseBot}/>
          })}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
