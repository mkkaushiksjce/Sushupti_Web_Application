import React from 'react';
import './film_school.less';

class FilmSchool extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="filmSchoolWrap">
                <div id="filmschoolImage">
                    <div id="filmschoolContentWrap">
                        <div className="content-header">LIGHT CAMERA ACTION</div>
                        <div className="content-subheader">LEARN FILM MAKING TECHNIQUES FROM THE BEST</div>
                    </div>
                </div>
                <div><iframe width="560" height="315" src="https://www.youtube.com/embed/15YamRufKJk?rel=0" frameborder="0" allowfullscreen></iframe></div>
            </div>
        )
    }
};

export default FilmSchool;