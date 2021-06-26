import React from 'react'
import { Link } from 'react-router-dom';

import './styles/Start.css';
import platziconfLogoImage from '../images/platziconf-logo.svg';
import startmorty from '../images/rickstart.png'




class Start extends React.Component {
   
    render() {
        return (
            <React.Fragment>
               <div className="Start">
                    <div className="container">
                        <div className="row">
                            <div className="Home__col col-12 col-md-4">
                                <img
                                    src={platziconfLogoImage}
                                    alt="Platzi Conf Logo"
                                    className="img-fluid mb-2"
                                />

                                <h1>Badge Management System</h1>
                                <Link className="btn btn-primary" to="/badges">
                                    Start
                                </Link>
                            </div>

                            <div className="Home__col d-none d-md-block col-md-8">
                                <img
                                    src={startmorty}
                                    alt="startmorty"
                                    className="img-fluid p-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Start;
