import React, { Component } from 'react';
import { Spring, Transition, animated } from 'react-spring/renderprops';

import './App.css';

import Header from './components/Header';
import ContentCard from './components/ContentCard';
import Footer from './components/Footer';

const pages = [
  style => (
    <animated.div style={{ ...style, height: '80%', width: '100%', position: 'absolute', background: '#1a2f58' }}></animated.div>
  ),
  style => (
    <animated.div style={{ ...style, height: '80%', width: '100%', position: 'absolute', background: '#12DBBF' }}></animated.div>
  ),
  style => (
    <animated.div style={{ ...style, height: '80%', width: '100%', position: 'absolute', background: '#322a44' }}></animated.div>
  ),
]

class App extends Component {

  constructor() {
    super()

    this.state = {
      currentCard: 0,

      directionFrom: 'translate3d(100%,0,0)',
      directionTo: 'translate3d(-50%,0,0)',
    }

    this.opac = 0;
  }

  changeCard = () => {

    switch (this.state.currentCard) {
      case 0:
        return (
          <ContentCard height={450} title="I'm Christian." subtitle='No, nothing to do with religion. Click this to learn more.'>
            <hr></hr><h4>My name?</h4> <h2>Christian Cotham.</h2> <h4>My game?</h4> <h2>I love playing games.</h2>
            <h5><a rel="noopener noreferrer" target='_blank' href='https://steamcommunity.com/id/Cassio853'>Add me on Steam</a></h5>
            <h5>Or Battle.net | Cassio#11467</h5>
            <h5>Or Origin | CassioLT</h5>
            <h5>Or Discord | Cassio#8334</h5>
            <h4>My passion?</h4>
            <h2>Programming.</h2>
            <h4 >Click the right arrow to see what I've made --></h4>
          </ContentCard>

        )

      case 1:
        return (
          <ContentCard height={0}>

          </ContentCard>
        )

      case 2:
        return (
          <ContentCard height={0}>

          </ContentCard>
        )

      default:
        break;
    }
  }

  leftClick = () => {
    let currentCard = this.state.currentCard;

    if (currentCard === 0) {
      currentCard = 2;
    } else {
      currentCard--;
    }

    this.setState({ currentCard, directionFrom: 'translate3d(100%,0,0)', directionTo: 'translate3d(-50%,0,0)' });
  }

  rightClick = () => {
    let currentCard = this.state.currentCard;

    if (currentCard === 2) {
      currentCard = 0;
    } else {
      currentCard++;
    }

    this.setState({ currentCard, directionFrom: 'translate3d(-50%,0,0)', directionTo: 'translate3d(100%,0,0)' });
  }

  headerClicked = pressed => {
    if (this.state.currentCard > pressed) {
      this.setState({ currentCard: pressed, directionFrom: 'translate3d(100%,0,0)', directionTo: 'translate3d(-50%,0,0)' });
    } else if (this.state.currentCard < pressed) {
      this.setState({ currentCard: pressed, directionFrom: 'translate3d(-50%,0,0)', directionTo: 'translate3d(100%,0,0)' });
    } else {
      this.setState({ currentCard: pressed });
    }
  }

  render() {
    return (

      <div className='app-container'>
        <Header _handleParentClick={(pressed) => this.headerClicked(pressed)} currentCard={this.state.currentCard} />

        <div className="main">
          <Transition
            native
            reset
            unique
            items={this.state.currentCard}
            from={{ opacity: 0, transform: this.state.directionFrom }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: this.state.directionTo }}>
            {currentCard => pages[currentCard]}
          </Transition>
        </div>

        <div className='content-container'>

          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            reset={true}>
            {opac =>
              <div style={opac}>
                {this.changeCard()}
              </div>
            }
          </Spring>

          <div className='arrow-container'>
            <button className='left-chevron'><img src={require('./assets/chevron-left.png')} alt='arrow left'
              onClick={this.leftClick} />
            </button>
            <button className='right-chevron'><img src={require('./assets/chevron-right.png')} alt='arrow right'
              onClick={this.rightClick} /></button>
          </div>

        </div>

        <Footer>

          <a href='https://github.com/DrySoldier' className='site-font'>- Github Repo -</a>
          <a href='https://github.com/DrySoldier' className='site-font'>- Repo for site -</a>

        </Footer>

      </div>
    );
  }
}

export default App;
