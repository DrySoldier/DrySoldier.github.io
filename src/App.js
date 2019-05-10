import React, { Component } from 'react';
import { Spring, Transition, animated } from 'react-spring/renderprops';

import './App.css';

import Header from './components/Header';
import ContentCard from './components/ContentCard';
import ProjectCard from './components/ProjectCard';
import ContactCard from './components/ContactCard';
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
            <hr></hr><h4>My name?</h4> <h2>Christian Cotham.</h2> <h4>My game?</h4> <h2>I <u>love</u> playing games.</h2>
            <h5><a rel="noopener noreferrer" target='_blank' href='https://steamcommunity.com/id/Cassio853'>Add me on Steam</a></h5>
            <h5>Or Battle.net | Cassio#11467</h5>
            <h5>Or Origin | CassioLT</h5>
            <h5>Or Discord | Cassio#8334</h5>
            <h4>My passion?</h4>
            <h2><u>Programming.</u></h2>
            <h4 >Click the right arrow to see what I've made --></h4>
          </ContentCard>

        )

      case 1:
        return (
          <div>
            <ProjectCard title='Chat analytics tool for Twitch.tv' img={require('./assets/twitch-vod-stats.png')}
              github='https://github.com/DrySoldier/twitch-vod-stats' site='https://twitch-vod-stats.com/'>
              Built with a front-end of ReactJS and a back-end of Serverless and AWS Lambda, this fullstack website gives users chat statistics for any video on Twitch.tv
            </ProjectCard>
            <ProjectCard title='Bee Movie quote generator' img={require('./assets/bee-alive.png')}
              site='http://bee-alive.s3-website-us-east-1.amazonaws.com/' github='https://github.com/DrySoldier/bee-alive'>
              Made as a joke, this React/Bootstrap website grabs a random quote from The Bee Movie (2007) and presents it on the screen for some comedic value from out-of-context lines.
            </ProjectCard>
            <ProjectCard title='BPMixer' img={require('./assets/splash.png')} github='https://github.com/DrySoldier/bpmixer'>
              A mobile-app built with React-Native and Firebase that grabs recipes based on ingredients that you have in your pantry. See what you can make with anything you have!
            </ProjectCard>
            <ProjectCard title='Trivia Game' github='https://github.com/DrySoldier/triviagame' site='https://drysoldier.github.io/TriviaGame/' img={require('./assets/triviagame.png')}>
              A simple trivia game, made to test the Trivia API
            </ProjectCard>
          </div>
        )

      case 2:
        return (
          <ContactCard height={0} title="Get in touch with me, let's talk about life." subtitle="Or about the weather, at least.">
            <hr></hr>
            <a href='tel:32120.4455'><h2>321.200.4455</h2></a>
            <a href="mailto:christiancotham61@gmail.com?Subject=Saw%20your%20portfolio" target="_top"><h2>christiancotham61@gmail.com</h2></a>
          </ContactCard>
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

          <a target='_blank' rel="noopener noreferrer" href='https://github.com/DrySoldier' className='site-font'>- Github Repo -</a>
          <a target='_blank' rel="noopener noreferrer" href='https://github.com/DrySoldier/DrySoldier.github.io' className='site-font'>- Repo for site -</a>

        </Footer>

      </div>
    );
  }
}

export default App;
