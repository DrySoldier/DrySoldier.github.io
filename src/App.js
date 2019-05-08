import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import ContentCard from './components/ContentCard';
import Footer from './components/Footer';

class App extends Component {

  constructor() {
    super()

    this.state = {
      currentCard: 0,
    }
  }

  changeCard = () => {

    switch (this.state.currentCard) {
      case 0:
        return (
          <div className='w3-animate-opacity'>
            <ContentCard title='Hi'>
              <img alt='me' className='profile-img' src={require('./assets/IMG_3416.png')}></img>
              <h5>Welcome to my portfolio!</h5> My name is Christian Cotham and I am an aspiring ReactJS and React-Native developer. Starting with Adobe
              Flash Builder 4.7 (R.I.P) in my freshman year of highschool, I have been learning front-end programming as a hobby and a passion.
              Soon after I was introduced to React-Native, eventually overcoming the learning challenges that came along with learning the framework,
              and I can proudly say I can build proficient React-Native applications, Redux and all! At this point I got into ReactJS, surprisingly
              easy to learn since React-Native is exactly like it. Now with some full-stack React websites and mobile applications under my belt,
              I believe I am ready to put my skills to use in real world applications!
            </ContentCard>

            <ContentCard title='Experience'>

              <h6>I have experience with the following development languages and packages:</h6>

              <ul>
                <li>HTML, CSS, Bootstrap, and Handlebars</li>
                <li>AWS Lambda, Cloudfront, API Gateway, S3 Bucket</li>
                <li>SQL, MongoDB, Mongoose Framework</li>
                <li>Node.js, Express Framework</li>
                <li>Serverless Framework</li>
                <li>ReactJS, React-Native</li>
                <li>Firebase (Authentication, storage)</li>
              </ul>

            </ContentCard>
          </div>
        )

      case 1:
        return (
          <div className='w3-animate-opacity project-container'>
            <ContentCard title='Bee-Alive' subtitle='Bee-Quote Generator' projectURL='http://bee-alive.s3-website-us-east-1.amazonaws.com/'>
              Bee-Alive is a quote generator for the Bee-Movie, made with ReactJS and deployed with AWS S3.
            </ContentCard>

            <ContentCard title='Twitch-Vod-Stats' subtitle='A website that generates statistics for VODs on Twitch.tv' projectURL='https://www.twitch-vod-stats.com'>
            Twitch-Vod-Stats is a full-stack application, made with ReactJS and deployed with AWS S3. The backend of the site uses Serverless and Lambda functions to provide information for the front-end, where it writes information to a MongoDB database for quick results once a VOD is loaded. 
            </ContentCard>

            <ContentCard title='Twitch-Vod-Stats-API' subtitle='The Serverless endpoint that connects with the frontend of twitch-vod-stats' projectURL='https://github.com/DrySoldier/twitch-vod-stats-api'>
              The backend for Twitch-Vod-Stats, anybody is able to use this API endpoint to create and get the chatlog of any twitch video, for whatever they want it for. Built with Express and Serverless, check the link above for full instructions of use.
            </ContentCard>

            <ContentCard title='Trivia Game' subtitle='A web-application testing the Trivia API' projectURL='https://drysoldier.github.io/TriviaGame/'>
              Built in JQuery and vanilla Javascript, this web-application grabs for a Trivia API to give random questions.
            </ContentCard>

            <ContentCard title='BPMixer' subtitle='A mobile application to get recipes based on things in your pantry' projectURL='https://github.com/DrySoldier/bpmixer'>
              A mobile application built with React-Native and a back-end of Firebase, this app takes an input of ingredients that you have in your pantry and returns a list of recipes that can be made with those ingredients. The app also gives the ability to log-in and save all recipes.
            </ContentCard>
          </div>
        )

      case 2:
        return (
          <div className='w3-animate-opacity'>
            <ContentCard title='Contact Info'>
              Available
            </ContentCard>
          </div>


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

    this.setState({ currentCard });
  }

  rightClick = () => {
    let currentCard = this.state.currentCard;

    if (currentCard === 2) {
      currentCard = 0;
    } else {
      currentCard++;
    }

    this.setState({ currentCard });
  }

  headerClicked = pressed => {
    this.setState({ currentCard: pressed });
  }

  render() {
    return (

      <div className='app-container'>
        <Header _handleParentClick={(pressed) => this.headerClicked(pressed)} currentCard={this.state.currentCard} />

        <div className='content-container'>

          {this.changeCard()}

          <div className='arrow-container'>
            <button style={{ marginLeft: 50, opacity: 0.2 }}><img src={require('./assets/chevron-left.png')} alt='arrow left'
              onClick={this.leftClick} />
            </button>
            <button style={{ marginRight: 50, opacity: 0.2 }}><img src={require('./assets/chevron-right.png')} alt='arrow right'
              onClick={this.rightClick} /></button>
          </div>

        </div>

        <Footer>

          <a href='https://github.com/DrySoldier'>Github Repo</a>
          <a href='https://github.com/DrySoldier'>Repo for site</a>

        </Footer>

      </div>
    );
  }
}

export default App;
