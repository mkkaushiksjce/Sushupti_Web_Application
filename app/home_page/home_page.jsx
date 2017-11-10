import React from 'react';
import './home_page.less';
import $ from 'jquery';
import Navbar from '../components/navbar/navbar';
import {browserHistory} from 'react-router';

class HomePage extends React.Component{

  constructor(props){
    super(props);
  }

  routeToFilmSchool = ()=>{
    browserHistory.push('film-school');
  }

  render(){
    const {props, state} = this;

    return(
          <div className="homepage">
            <Navbar />
            <div className="home-section-wrap">
              <div className="overlay"></div>
              <div className="title-wrap">
                <h1 className="title">SUSPTHI DREAM STUDIOS</h1>
                <div className="subtitle">Filmmaking is the ultimate team sport.</div>
                <div id="contactBtn" className="button ripple" onClick={this.routeToFilmSchool}>GO TO FILM SCHOOL</div>
              </div>
            </div>
          </div>
        )
      }
    }

HomePage.propTypes = {
};

export default HomePage;
