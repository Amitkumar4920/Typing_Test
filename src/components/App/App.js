import React from "react";
import "./App.css";
import { TestContainer } from "../TestContainer/TestContainer";
import Frontpage from "../Frontpage";
import { typingTestData } from './../../data/source';
import { randomElementSelector } from '../../helper/randomSelector';
import './App.css';
import { testDetailsCalculator } from '../../helper/testDetailsCalculator';

const defaultstate = {
  timerStarted: false,
  timerValue: 35,
  selectedParagraph: randomElementSelector(typingTestData),
  detailsContainer: {
    words: 0,
    characters: 0,
    mistakes: 0
  }
};

class App extends React.Component {
  constructor() {
    super();

    this.state = defaultstate;
  }

  handleOnType = (inputValue) => {
    console.log('from app components', inputValue);
    if (!this.state.timerStarted) this.startTimer();

    this.setState({ detailsContainer: testDetailsCalculator(this.state.selectedParagraph, inputValue) });
  }

  triggerTryAgain = () => {
    this.setState(defaultstate);
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timerValue > 0) {
        this.setState((prevState) => ({ timerValue: prevState.timerValue - 1 }));
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div className="app-container">
        <Frontpage />

        <h1 className="main-heading">Speedy Type</h1>
        <div className="test-container-main">
          <TestContainer
            timerStarted={this.state.timerStarted}
            timerValue={this.state.timerValue}
            handleOnType={this.handleOnType}
            triggerTryAgain={this.triggerTryAgain}
            selectedParagraph={this.state.selectedParagraph}
            words={this.state.detailsContainer.words}
            characters={this.state.detailsContainer.characters}
            mistakes={this.state.detailsContainer.mistakes}
          />
        </div>
      </div>
    );
  }
}

export default App;
