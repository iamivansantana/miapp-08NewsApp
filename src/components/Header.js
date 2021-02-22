import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return (
        <>
            <nav className="nav-wrapper light-blue darken-3">
                <a href="#!" className="brand-logo center">{titulo}</a>
            </nav>  
        </>
    )
}

export default Header

//PropTypes

Header.propTypes={
    titulo: PropTypes.string.isRequired
}