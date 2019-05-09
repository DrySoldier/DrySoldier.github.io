import React from 'react';
import { Spring } from 'react-spring/renderprops';

class ContentCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        }
    }

    click = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    handleClick = () => {
        if (!this.state.clicked) {
            return (
                <Spring
                    from={{ opacity: 1, height: this.props.height }}
                    to={{ opacity: 0, height: 0 }}>
                    {props => <div className='extended-div site-font' style={props}>{this.props.children}</div>}
                </Spring>
            );
        } else {
            return (
                <Spring
                    from={{ opacity: 0, height: 0 }}
                    to={{ opacity: 1, height: this.props.height }}>
                    {props => <div className='extended-div site-font' style={props}>{this.props.children}</div>}
                </Spring>
            );
        }
    }

    render() {
        return (
            <div onClick={() => this.click()} className='content-card box-shadow'>
                <div><h2 className='site-font'>{this.props.title}</h2></div>
                <div><h4 className='site-font'>{this.props.subtitle}</h4></div>
                {this.handleClick()}
            </div>
        );
    }
}

export default ContentCard;

