import React, { useState } from 'react';
import './Friend.css';
import fakeData from '../../fakeData';
import Fditem from '../Fditem/Fditem';
import Fdinfo from '../Fdinfo/Fdinfo';



const Friend = () => {
     const frist15 = fakeData.slice(0, 15);
     const [friends, setFriends] = useState(frist15);

     const [frdetails, setFrdetails] = useState([]);
    
     const handleFriendItem = (friend) => {
        //  console.log("Single Item", friend);
         const newItem = [...frdetails, friend];
         setFrdetails(newItem);
     }


    return (
        <div className="friend-sec">
            <div className="container friendDiv">
                <div className="friends-area">
                   
                        {
                            friends.map(fd => <Fditem 
                                handleFriendItem = {handleFriendItem}
                                frd={fd}
                                >

                                </Fditem>)
                        }
                    
                </div>
                <div className="friends-about">
                   
                   
                    <Fdinfo frdetails={frdetails}></Fdinfo>
                </div>
                
            </div>
        </div>
    );
};

export default Friend;