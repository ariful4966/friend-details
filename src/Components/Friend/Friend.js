import React, { useState } from 'react';
import './Friend.css';
import fakeData from '../../fakeData';


const Friend = () => {
     const frist15 = fakeData.slice(0, 15);
     const [friends, setFriends] = useState(frist15);
    


    return (
        <div className="friend-sec">
            <div className="container friendDiv">
                <div className="friends-area">
                    <ul>
                        {
                            friends.map(fd => <div>{fd.name}</div>)
                        }
                    </ul>
                </div>
                <div className="friends-about">
                    <h3>About Friens</h3>
                </div>
                
            </div>
        </div>
    );
};

export default Friend;