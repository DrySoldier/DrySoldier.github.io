import React from 'react';

class ProjectCard extends React.Component {

    render() {
        return (
            <div className='project-card box-shadow'>
                <img className='project-img' alt='project' src={this.props.img}></img>
                <div className='project-content'>
                    <div><h2 className='title-font'><b>{this.props.title}</b></h2></div>
                    <div><h4 className='site-font'>{this.props.subtitle}</h4></div>
                    <div className='extended-div site-font'>{this.props.children}</div>
                    <div className='link-div'>
                        <a target='_blank' rel="noopener noreferrer" href={this.props.github}>Github</a>
                        <a target='_blank' rel="noopener noreferrer" href={this.props.site}>Site Link</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;

