import React from 'react';

class ContactCard extends React.Component {

    render() {
        return (
            <div className='project-card box-shadow'>
                <div className='project-content'>
                    <div><h2 className='title-font'><b>{this.props.title}</b></h2></div>
                    <div><h4 className='site-font'>{this.props.subtitle}</h4></div>
                    <div className='extended-div site-font'>{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default ContactCard;

