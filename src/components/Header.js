import React from 'react';
import { Navbar } from 'react-bootstrap';

export default class Header extends React.Component {

    handleClick = pressed => {
        this.props._handleParentClick(pressed);
    }

    checkCurrentCard = () => {
        switch (this.props.currentCard) {
            case 0:
                return (
                    <div className='header-div'>
                        <Navbar expand="lg" className='header-nav'>
                            <Navbar.Brand className='active-card line'><button className='link' btn-attr='about' style={{ color: 'black' }} onClick={() => this.handleClick(0)}>About Me</button></Navbar.Brand>
                            <Navbar.Brand><button className='link' onClick={() => this.handleClick(1)}>Things I've Made</button></Navbar.Brand>
                            <Navbar.Brand><button className='link' onClick={() => this.handleClick(2)}>Contact Info</button></Navbar.Brand>
                        </Navbar>
                    </div>
                )

            case 1:
                return (
                    <div className='header-div'>
                        <Navbar expand="lg" className='header-nav'>
                            <Navbar.Brand><button className='link' onClick={() => this.handleClick(0)}>About Me</button></Navbar.Brand>
                            <Navbar.Brand className='active-card line'><button className='link' style={{ color: 'black' }} onClick={() => this.handleClick(1)}>Things I've Made</button></Navbar.Brand>
                            <Navbar.Brand><button className='link' onClick={() => this.handleClick(2)}>Contact Info</button></Navbar.Brand>
                        </Navbar>
                    </div>
                )

            case 2:
                return (
                    <div className='header-div'>
                        <Navbar expand="lg" className='header-nav'>
                            <Navbar.Brand><button className='link' onClick={() => this.handleClick(0)}>About Me</button></Navbar.Brand>
                            <Navbar.Brand><button className='link' onClick={() => this.handleClick(1)}>Things I've Made</button></Navbar.Brand>
                            <Navbar.Brand className='active-card line'><button className='link' style={{ color: 'black' }} onClick={() => this.handleClick(2)}>Contact Info</button></Navbar.Brand>
                        </Navbar>
                    </div>
                )

            default:
                break;
        }
    }

    render() {
        return (
            <div>
                {this.checkCurrentCard()}
            </div>
        )
    }
}

