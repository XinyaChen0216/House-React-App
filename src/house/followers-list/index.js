import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FollowersListItem from "./followers-list-item";
import { findAllUserThunk } from "../services/auth-thunks";

const FollowerList = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const { currentUser } = useSelector((state) => state.user);
    let followers = [];

    

    console.log("users");
    console.log(users);

    console.log("currentUser");
    console.log(currentUser);
    
    if(currentUser && currentUser.followers.length > 0){
        users.forEach(user => {
            if(currentUser.followers.includes(user._id)){
                followers.push(user);
            }
        })
    }
    
    useEffect(() => {
        dispatch(findAllUserThunk())}, [])
    
        console.log("followers");
        console.log(followers);

    if(followers.length===0){
        return(
            <ul className="list-group mt-2">
                <li className="list-group-item">
                    <h3>Followers</h3>
                    
                </li>
                <li className="list-group-item">
                    <span>No followers yet</span>
                </li>
        
            </ul>
        )
    }

    return (
        <ul className="list-group mt-2">
            <li className="list-group-item">
                <h3>Followers</h3>
            </li>
            {
                
                followers.map(follower =>
                  <FollowersListItem 
                  key={follower.username}
                  follower={follower} />
                )
            }
        </ul>
    );
};
export default FollowerList;
