import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h3>error 404 - <Link to='/' >Go Home</Link></h3>
    </div>
);

export default NotFoundPage;