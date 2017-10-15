import React from 'react';
import './home_page.less';

class HomePage extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    const {props, state} = this;

    return(
          <div className="homepage">
            <div className="home-section-wrap">
              <div className="overlay"></div>
              <div className="title-wrap">
                <h1 className="title">MATERIAL DESIGN AGENCY WP THEME</h1>
                <div className="subtitle">SUPER CLEAN MINIMAL DESIGN. AWESOME FEATURES WITH ENDLESS POSSIBILITIES.</div>
                <div id="contactBtn" className="button">GET IN TOUCH</div>
              </div>
            </div>
          </div>
        )
      }
    }

HomePage.propTypes = {
};

export default HomePage;
