import React from "react";

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