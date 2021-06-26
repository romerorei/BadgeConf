import React from 'react'

import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props) {
 //   const children = props.children;
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default Layout;