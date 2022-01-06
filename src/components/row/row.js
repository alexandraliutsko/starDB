import React from "react";
import PropTypes from 'prop-types';

import './row.css';

export default function Row ({ left, right }) {
    return (
        <div className='people-page row mb2'>
            <div className='col-md-6'>
                { left }
            </div>
            <div className='col-md-6'>
                { right }
            </div>
        </div>
    );
}

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}
