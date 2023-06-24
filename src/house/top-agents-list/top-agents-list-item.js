import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
viewProfileThunk, viewTopAgentThunk
} from "../services/auth-thunks";

const WhoToFollowListItem = (
    {
        who
    }
) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-6">
                    <div className="fw-bold">{who.username}</div>
                    <div>@{who.first_name}</div>
                </div>
                
                <div className="col-6">
                
                <button className="col btn btn-primary rounded-pill float-end"
                    
                    onClick={async () => {
                        await dispatch(viewProfileThunk(who.username));
                        let url = '/house/profile/' + who.username;
                        navigate(url);
                    }}>View Profile</button>
                
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;