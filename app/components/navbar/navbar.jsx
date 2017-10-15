import React from 'react';
import './home_page.less';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {props, state} = this;

        return{
                <div className="navbar-wrap cf">
                    <div id="customViewport" className="viewport-wrap">
                        <div className="logo-wrap f-l"></div>
                        <div className="nav-components-wrap f-r">
                            <div id="home" className="nav-component">HOME</div>
                            <div id="service" className="nav-component">SERVICES</div>
                            <div id="contact" className="nav-component">CONTACT</div>
                        </div>
                    </div>
                </div>
        }
    }
}

export default Navbar;