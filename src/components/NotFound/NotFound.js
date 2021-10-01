import React from 'react';

const NotFound = () => {
    const page404 = {
        backgroundColor: 'lightgray',
        color: 'black',
        textAlign: 'center',
        marginTop: '100px',
        borderRadius: '20px',
        padding: '80px'
    }
    return (
        <div style={page404}>
            <h1>Ops!</h1>
            <h1>ERROR 404</h1>
            <h3>The page you are looking for isnot avilable</h3>
        </div>
    );
};

export default NotFound;