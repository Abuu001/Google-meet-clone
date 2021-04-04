import React from 'react'
import "./MeetingInfo.scss"
import PersonIcon from '@material-ui/icons/Person';
import ClearIcon from '@material-ui/icons/Clear';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SecurityIcon from '@material-ui/icons/Security';

function MeetingInfo() {
    return (
        <div className="MeetingInfo">
            <div className="meetings__header">
                <h3>Your Meeting's  Ready</h3>
                <ClearIcon className="icon"/>
            </div>
            <button className="addPeople__btn"><PersonIcon   className="icon" />Add Others</button>
            <p className="info__text">Or share this meeting link
            with others you want in the meeting
            </p>
            <div className="meeting__link">
                <span>Some random url</span>
                <FileCopyIcon />
            </div>
            <div className="permission__text">
                <SecurityIcon className="icon"/>
                <p className="small_text">
                    People who use this meeting link must get your permission 
                    before they can join
                </p>
            </div>
                <p  className="small_text">
                        Join as exampler101@gmail.com
                </p>
        </div>
    )
}

export default MeetingInfo
