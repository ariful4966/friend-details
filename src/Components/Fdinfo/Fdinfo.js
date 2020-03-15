import React from 'react';
import './Fdinfo.css';

const Fdinfo = (props) => {
    const frdetails = props.frdetails;
    const frdsingle = frdetails.reduce((salary, frid) => salary+frid.salary,0);
    return (
        <div>
            <h2>Friend Information</h2>
            <h5>Friends: {frdetails.length}</h5>
            <p>Total Salary: {frdsingle}</p>
            <button>Show Information</button>
        </div>
    );
};

export default Fdinfo;