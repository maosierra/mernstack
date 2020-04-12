import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">NotesApp</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
