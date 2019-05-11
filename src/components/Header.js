import React from 'react';

export default class Header extends React.Component {

    handleClick = pressed => {
        this.props._handleParentClick(pressed);
    }

    checkCurrentCard = () => {
        switch (this.props.currentCard) {
            case 0:
                return (
                    <div className='header-div'>
                        <div><button className='link' btn-attr='about' style={{ color: 'black' }} onClick={() => this.handleClick(0)}><h5 className='line'>About Me</h5></button></div>
                        <div><button className='link' onClick={() => this.handleClick(1)}><h5>Things I've Made</h5></button></div>
                        <div><button className='link' onClick={() => this.handleClick(2)}><h5>Contact Info</h5></button></div>
                    </div>
                )

            case 1:
                return (
                    <div className='header-div'>
                        <div><button className='link' onClick={() => this.handleClick(0)}><h5>About Me</h5></button></div>
                        <div><button className='link' style={{ color: 'black' }} onClick={() => this.handleClick(1)}><h5 className='line'>Things I've Made</h5></button></div>
                        <div><button className='link' onClick={() => this.handleClick(2)}><h5>Contact Info</h5></button></div>
                    </div>
                )

            case 2:
                return (
                    <div className='header-div'>
                        <div><button className='link' onClick={() => this.handleClick(0)}><h5>About Me</h5></button></div>
                        <div><button className='link' onClick={() => this.handleClick(1)}><h5>Things I've Made</h5></button></div>
                        <div><button className='link' style={{ color: 'black' }} onClick={() => this.handleClick(2)}><h5 className='line'>Contact Info</h5></button></div>
                    </div>
                )

            default:
                break;
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
                {this.checkCurrentCard()}
            </div>
        )
    }
}

