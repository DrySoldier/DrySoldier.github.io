import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';

export default class ContentCard extends Component {

    render() {
        return (
            <Col style={{ minHeight: 200, maxWidth: 800, minWidth: 400, overflow: 'auto', marginTop: 50 }}>
                <div className='card box-shadow text-center'>
                    <div style={{ marginTop: 15 }} className='text-center card-title'><h3>{this.props.title}</h3></div>
                    <h5>{this.props.subtitle}</h5>
                    <a href={this.props.projectURL} rel="noopener noreferrer" target='_blank'>{this.props.projectURL}</a>
                    <div className="card-body d-flex align-items-center flex-column justify-content-md-center">
                        {this.props.children}
                    </div>
                </div>
            </Col>
        );
    }
}

