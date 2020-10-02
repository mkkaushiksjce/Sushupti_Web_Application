import React from 'react';
import './navbar.less';
import { browserHistory, Link} from 'react-router';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    contactForm = ()=>{
        const link = 'https://docs.google.com/forms/d/e/1FAIpQLSfFLbhm3zotwdAwfo2VUJpcUVzChiZFWnux6SUHg1gqPGbs2g/viewform';
        window.location.href = link;
    }

    render(){
        const {props, state} = this;
        
        return(
                <div className="navbar-wrap cf">
                    <div id="customViewport" className="viewport-wrap">
                        <div className="logo-wrap f-l"></div>
                        <div className="nav-components-wrap f-r transition" >
                            <div id="home" className="nav-component transition">HOME</div>
                            <div id="service" className="nav-component transition">OUR WORK</div>
                            <div id="contact" onClick={this.contactForm} className="nav-component transition">CONTACT</div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Navbar;