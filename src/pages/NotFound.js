import React from 'react'
import { Link } from 'react-router-dom';


import './styles/404.css';
import head_404 from '../images/head_404.png';
import rick404 from '../images/rickm404.png'




class NotFound extends React.Component {
   
    render() {
        return (
            <React.Fragment>
               <div className="NotFound">
                    <div className="container">
                        <div className="row">
                            <div className="Home__col col-12 col-md-4">
                                <img
                                    src={head_404}
                                    alt="Platzi Conf Logo"
                                    className="img-fluid mb-2"
                                />

                                <h1>404 Pages not found</h1>
                                <strong>GO BACK   TO DIMENSION C-137</strong>
                                <Link className="btn btn-primary" to="/badges">
                                    Start
                                </Link>
                            </div>

                            <div className="Home__col d-none d-md-block col-md-8">
                                <img
                                    src={rick404}
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

export default NotFound;
