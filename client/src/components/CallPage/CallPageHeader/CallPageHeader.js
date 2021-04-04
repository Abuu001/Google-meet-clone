import React from 'react'
import "./CallPageHeader.scss";
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function CallPageHeader() {
    return (
        <div className="CallPageHeader">
            <div className="header__items icon__block">
                <GroupIcon className="icon" />
            </div>
            <div className="header__items icon__block">
                <ChatIcon   className="icon"  />
                <span className="alert__alert__icon"></span>
            </div>

            <div className="header__items date__block">
                1:00PM
            </div>

            <div className="header__items icon__block">
                <AccountCircleIcon    className="icon profile" />
            </div>
        </div>
    )
}

export default CallPageHeader
