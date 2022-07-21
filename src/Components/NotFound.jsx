import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            Ups, this page is not found. <br/>
            Come back to the <Link to="..">homepage</Link>
        </div>
    );
};

export default NotFound;