import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const botsUrl = 'http://localhost:6001/bots'

class BotsPage extends Component {
  
  state = {
    bots: [],
    yourBots: []
  }

  componentDidMount(){
    fetch(botsUrl)
      .then(response => response.json())
      .then(result => {
        this.setState({bots: result})
      })
  }

  addToBotArmy = (bot) => {
    if(!this.state.yourBots.find( eachBot => eachBot === bot)){
      this.setState({yourBots: [...this.state.yourBots, bot]})
    }
  }

  releaseBot = (bot) => {
    let remainingBots = this.state.yourBots.filter(bot.it !== bot)
    this.setState({
      yourBots: remainingBots
    })
  }

  deleteBot = (bot) => {
    const leftOverBots = this.state.bots.filter(currentBot => currentBot !== bot)
    this.setState({bots: leftOverBots})
    fetch(`${botsUrl}/${bot.id}}`, {
      method: 'DELETE'
    })
  }

  render() {
    return(
      <div>
        <YourBotArmy yourBots={this.state.yourBots} releaseBot={this.releaseBot}/>
        <BotCollection bots={this.state.bots} addToBotArmy={this.addToBotArmy}/>
      </div>
    );
  }
}


export default BotsPage;
