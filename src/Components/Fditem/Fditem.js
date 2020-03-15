import React from 'react';
import './Fditem.css';
const Fditem = (props) => {
    const {img, name, category, salary, email, mobail} = props.frd;
    //  console.log(props);
    return (
        <div className="friend-item">
            <div className="friendPic">
                <img src={img} alt=""/>
            </div>
            <div className="friendDtails">
                <h3>{name}</h3>
                <h5>Type of Friend: {category}</h5>
                 <p>Salary: {salary}</p>
                 <p>Email: {email}</p>
                <p>Mobail: {mobail}</p>
                <button onClick={() => props.handleFriendItem(props.frd)} class="item_button">Show Details</button>
            </div>
        </div>
    );
};

export default Fditem;