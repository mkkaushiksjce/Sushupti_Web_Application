import React from 'react';
import './navbar.less';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {props, state} = this;

        return(
                <div className="navbar-wrap cf">
                    <div id="customViewport" className="viewport-wrap">
                        <div className="logo-wrap f-l"></div>
                        <div className="nav-components-wrap f-r">
                            <div id="home" className="nav-component">HOME</div>
                            <div id="service" className="nav-component">OUR WORK</div>
                            <div id="contact" className="nav-component">CONTACT</div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Navbar;