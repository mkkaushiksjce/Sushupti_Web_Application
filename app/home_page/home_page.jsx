import React from 'react';
import './home_page.less';

class HomePage extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount = ()=>{
    console.log('heello');
  }

  render(){
    const {props, state} = this;

    return(
      <div className="landing">Mayaskara
      </div>
    )
  }
}

HomePage.propTypes = {
};

export default HomePage;
