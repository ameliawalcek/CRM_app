import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {

    return (
        <div>
            <Link to='/clients'>Clients</Link>
            <Link to='/analytics'>Analytics</Link>
            <Link to='/actions'>Actions</Link>
        </div>
    )
}

export default NavBar;